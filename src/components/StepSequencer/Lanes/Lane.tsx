import * as React from 'react';
import { includes } from 'lodash';
import { Box } from 'grommet';

import handpanSampler from '../../../lib/handpanSampler';
import { stringifyNote, getColorForNote } from '../../../lib/note';
import { InstrumentContext } from '../../../state/instrument';
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

const Lane = ( { lane, laneIndex, note, playPosition, isPlaying }: LaneProps ) => {
    const { flashNote } = React.useContext( InstrumentContext );
    const { stepsCount, activeSteps } = lane;

    React.useEffect(
        () => {
            const shouldPlayNote = (
                note &&
                isPlaying &&
                includes( activeSteps, playPosition ) &&
                handpanSampler.loaded
            );

            shouldPlayNote &&
                handpanSampler.triggerAttack( stringifyNote( note ) )

            shouldPlayNote &&
                flashNote( note );
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
