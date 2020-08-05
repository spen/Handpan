import * as React from 'react';
import { includes, times } from 'lodash';
import { Box } from 'grommet';

import SequencerContext, { toggleStep } from "../../../state/useSequencerContext";
import Step from './Step';

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
        <Box flex direction="row">
            { times( stepsCount, stepIndex => (
                <Step
                    isActive={ includes( activeSteps, stepIndex ) }
                    isAtPlayPosition={ playPosition === stepIndex }
                    isPlaying={ isPlaying }
                    onClick={ () => {
                        setSequencerState( toggleStep( sequencerState, { laneIndex, stepIndex } ) )
                    } }
                    index={ stepIndex }
                />
            ) ) }
        </Box>
    );
}

export default Steps;
