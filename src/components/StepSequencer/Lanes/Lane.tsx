import * as React from 'react';
import styled from 'styled-components';
import { includes } from 'lodash';
import { Box } from 'grommet';

import InstrumentContext from '../../../state/useInstrumentsContext';
import useInstrumentReducer from '../../../state/instrument/reducer';
import handpanSampler from '../../../lib/handpanSampler';
import { stringifyNote, getColorForNote } from '../../../lib/note';
import Steps from './Steps';
import Controls from './Controls';


type LaneType = {
    stepsCount: number,
    activeSteps: number[],
};

type NoteType = {
    octave: number,
    tone: string,
};

interface LaneProps {
    lane: LaneType,
    note: NoteType,
    playPosition: number,
    isPlaying: boolean,
    laneIndex: number,
    color?: string,
};

// const debounced

const Lane = ( { lane, laneIndex, note, playPosition, isPlaying }: LaneProps ) => {
    // const [instrumentState, setInstrumentState] = React.useContext(InstrumentContext);
    const { stepsCount, activeSteps } = lane;

    const { state, addNote, removeNote , flashNote} =  useInstrumentReducer();

    console.log( { state })

    React.useEffect(
        () => {
            const shouldPlayNote = (
                note &&
                isPlaying &&
                includes( activeSteps, playPosition ) &&
                handpanSampler.loaded
            );

            if ( shouldPlayNote ) {

                handpanSampler.triggerAttack( stringifyNote( note ) );

                flashNote( note );
            }
        },
        [ playPosition, isPlaying ]
    );

    return (
        <Box direction="row">
            <Controls label={ stringifyNote( note ) } color={ getColorForNote( note ) } />
            <Steps
                stepsCount={ stepsCount }
                activeSteps={ activeSteps }
                isPlaying={ isPlaying }
                playPosition={ playPosition % stepsCount }
                laneIndex={ laneIndex }
            />
        </Box>
    );
}

export default Lane;
