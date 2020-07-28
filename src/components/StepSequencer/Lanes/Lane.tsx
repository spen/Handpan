import * as React from 'react';
import styled from 'styled-components';
import { includes } from 'lodash';

import handpanSampler from '../../../lib/handpanSampler';
import { stringifyNote } from '../../../lib/note';
import Steps from './Steps';
import Controls from './Controls';

const LaneContainer = styled.div`
    display: flex;
`;

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
};

const Lane = ( { lane, laneIndex, note, playPosition, isPlaying }: LaneProps ) => {
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
        },
        [ playPosition, isPlaying ]
    );

    return (
        <LaneContainer>
            <Controls label={ stringifyNote( note ) } />
            <Steps
                stepsCount={ stepsCount }
                activeSteps={ activeSteps }
                isPlaying={ isPlaying }
                playPosition={ playPosition % stepsCount }
                laneIndex={ laneIndex }
            />
        </LaneContainer>
    );
}

export default Lane;
