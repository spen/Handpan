import * as React from 'react';
import styled from 'styled-components';
import { MdPlayArrow, MdPause } from 'react-icons/md';

const IconButton = styled.span`
    background-color: rgba( 0, 0, 0, 0.2 );
`;

const ControlBarContainer = styled.div`
    background-color: rgba( 100, 100, 100, 0.5 );
    padding; 4px;
    border: 2px solid rgba( 0, 0, 0, 0.2 );
`;

interface ControlBarProps {
    bpm: number,
    isPlaying: boolean,
    onPlay: () => void,
    onPause: () => void,
};

// TODOs: Lots of improvement to be made here
const ControlBar = ( { bpm, isPlaying, onPause, onPlay }: ControlBarProps ) => {
    return (
        <ControlBarContainer>
            <IconButton onClick={ isPlaying ? onPause : onPlay }>
                { isPlaying ? <MdPause /> : <MdPlayArrow /> }
            </IconButton>
            <span>
                BPM: { bpm }
            </span>
        </ControlBarContainer>
    )
}

export default ControlBar;
