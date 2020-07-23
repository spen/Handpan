import * as React from 'react';
import styled from 'styled-components';
import { includes, times } from 'lodash';

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
}

const Steps = ( { stepsCount, activeSteps, playPosition, isPlaying }: StepsProps ) => (
    <StepsContainer>
        { times( stepsCount, n => (
            <Step
                isActive={ includes( activeSteps, n ) }
                isAtPlayPosition={ playPosition === n }
                isPlaying={ isPlaying }
            />
        ) ) }
    </StepsContainer>
);

export default Steps;
