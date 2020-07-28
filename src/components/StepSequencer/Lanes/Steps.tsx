import * as React from 'react';
import styled from 'styled-components';
import { includes, times } from 'lodash';

import SequencerContext, { toggleStep } from "../../../state/useSequencerContext";
import Step from './Step';

const StepsContainer = styled.div`
    display: flex;
    flex-grow: 1;
`;

interface StepsProps {
    stepsCount: number,
    activeSteps: number[],
    playPosition: number,
    isPlaying: boolean,
    laneIndex: number;
}

const Steps = ( { stepsCount, activeSteps, playPosition, isPlaying, laneIndex }: StepsProps ) => {
    const [sequencerState, setSequencerState] = React.useContext(SequencerContext);

    return (
        <StepsContainer>
            { times( stepsCount, stepIndex => (
                <Step
                    isActive={ includes( activeSteps, stepIndex ) }
                    isAtPlayPosition={ playPosition === stepIndex }
                    isPlaying={ isPlaying }
                    onClick={ () => {
                        setSequencerState( toggleStep( sequencerState, { laneIndex, stepIndex } ) )
                    } }
                />
            ) ) }
        </StepsContainer>
    );
}

export default Steps;
