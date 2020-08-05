import * as React from 'react';
import styled from 'styled-components';
import { MdPlayArrow, MdPause } from 'react-icons/md';
import { Box, Button, FormField, TextInput } from 'grommet';

import SequencerContext, { setTempo } from "../../../state/useSequencerContext";

const PlayIcon = styled( MdPlayArrow )`
    display: flex; !important
`;

const PauseIcon = styled( MdPause )`
    display: flex;
`;


interface ControlBarProps {
    isPlaying: boolean,
    onPlay: () => void,
    onPause: () => void,
};

const ControlBar = ( { isPlaying, onPause, onPlay }: ControlBarProps ) => {
    const [sequencerState, setSequencerState] = React.useContext(SequencerContext);
    
    return (
        <Box background="blueBright" flex direction="row" style={{ alignItems: 'center', borderRadius: '12px 12px 0 0' }} pad="xsmall">
            <Button 
                label={ isPlaying ? <MdPause /> : <MdPlayArrow /> }
                onClick={ isPlaying ? onPause : onPlay } 
                fill="vertical"
                color="white"
                style={ { display: 'flex' } }
            >
                { isPlaying ? <PauseIcon /> : <PlayIcon /> }
            </Button>
            <FormField label="Tempo:" htmlFor="bpm-input" margin="none" style={{display: 'flex', marginRight: '2px' }} />
            <Box background="blue">
                <TextInput
                    id="bpm-input"
                    type="number"
                    max={ 300 }
                    min={ 4 }
                    value={sequencerState.bpm}
                    onChange={event => setSequencerState(setTempo(sequencerState, event.target.value))}
                    style={{ width: '100px', border: 'none' }}
                    color="blue"
                />
            </Box>
        </Box>
    );
}

export default ControlBar;
