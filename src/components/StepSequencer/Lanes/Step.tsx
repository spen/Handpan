import * as React from 'react';
import { Box } from 'grommet';

interface StepProps {
    isActive?: boolean;
    isPlaying?: boolean;
    isAtPlayPosition?: boolean;
    onClick?: (any) => void;
    index: number;
}

const getBackgroundColor = ( { isActive, isAtPlayPosition, isPlaying }: StepProps ) =>
        isActive ? (
            isAtPlayPosition ? 'blueBright' : 'blue'
        ) : (
            isAtPlayPosition && isPlaying ? 'darkBackgroundHighlight' : 'darkBackground'
        );
    
const getBackgroundHoverColor = ( { isActive, isAtPlayPosition, isPlaying }: StepProps ) =>
    isActive ? (
        isAtPlayPosition && isPlaying ? 'blueBright' : 'blueHover'
    ) : 'darkHover';

export default ( props : StepProps ) =>
    <Box 
        background={ getBackgroundColor( props ) } 
        flex="grow"
        fill="vertical"
        border={ {
            color: 'border',
            size:  '1px',
            style: 'solid',
            side: "all"
        } }
        hoverIndicator={ getBackgroundHoverColor( props ) }
        onClick={ props.onClick }
        focusIndicator={ false }
    />
