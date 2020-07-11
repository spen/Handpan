import * as React from 'react';
import styled from 'styled-components';
import { includes } from 'lodash';

import handpanSampler from '../../../lib/handpanSampler';
import formatNote from '../../../lib/note/formatNote';
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
};

const Lane = ( { lane, note, playPosition, isPlaying }: LaneProps ) => {
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
                handpanSampler.triggerAttack( formatNote( note ) )
        },
        [ playPosition, isPlaying ]
    );

    return (
        <LaneContainer>
            <Controls label={ formatNote( note ) } />
            <Steps
                stepsCount={ stepsCount }
                activeSteps={ activeSteps }
                isPlaying={ isPlaying }
                playPosition={ playPosition % stepsCount }
            />
        </LaneContainer>
    );
}

export default Lane;
