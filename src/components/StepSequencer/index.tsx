import * as React from 'react';
import styled from 'styled-components';
import { MdPlayArrow, MdPause } from 'react-icons/md';

import useInstrumentsState from '../../state/useInstrumentsState';
import useSequencerState from '../../state/useSequencerState';
import Lanes from './Lanes';
import ControlBar from './ControlBar';

const Container = styled.div`
	margin: 0 auto;
    position: relative;
    border: 4px solid #359;
    margin: 20px;
`;

const StepSequencer = () => {
    const [ sequencerState ] = useSequencerState();
    const [ instrumentState ] = useInstrumentsState();
    const { bpm, lanes } = sequencerState;
    const { notes } = instrumentState[ 0 ]; // use a selector

    // Here we're using component state (as opposed to pulling in state access from another module).
    // It works in the same way but has a few differences.
    // Don't worry about those differences yet though, We'll find those out as we go.
    const [ isPlaying, setIsPlaying ] = React.useState( false );
    const [ playPosition, setPlayPosition ] = React.useState( 0 );

    // This section increments the play position every second.
    // At some point we'll need to make tweaks to it
    // so we can change the BPM of the sequencer.
    React.useEffect(
        () => {
            let interval = null;
            if (isPlaying) {
                interval = setInterval(() => {
                    setPlayPosition( playPosition + 1 );
                }, 60000 / bpm );
            } else if ( ! isPlaying && playPosition !== 0) {
                clearInterval( interval );
            }

            return () => clearInterval( interval );
        },
        [ isPlaying, playPosition ]
    );

    // Here I'm just making a couple of aliased versions of setIsPlaying,
    // but with values true and false. This just makes things a little clearer to read later.
    const setPaused = () => setIsPlaying( false );
    const setPlaying = () => setIsPlaying( true );

	return (
		<Container>
            <ControlBar
                isPlaying={ isPlaying }
                onPause={ setPaused }
                onPlay={ setPlaying }
                bpm={ bpm }
            />
            <Lanes
                lanes={ lanes }
                isPlaying={ isPlaying }
                notes={ notes }
                playPosition={ playPosition }
            />
		</Container>
	);
};

export default StepSequencer;
