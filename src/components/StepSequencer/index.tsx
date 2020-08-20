import * as React from 'react';
import { Box } from 'grommet';

import { InstrumentContext } from '../../state/instrument';
import SequencerContext from "../../state/useSequencerContext";
import Lanes from './Lanes';
import ControlBar from './ControlBar';

const StepSequencer = () => {
    const [sequencerState] = React.useContext(SequencerContext);
    const { state: { instrument: { notes } } } = React.useContext(InstrumentContext);
    const { bpm, lanes } = sequencerState;

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
		<Box fill background="darkBackground" elevation="medium" round={ { corner: 'top' } }>
            <ControlBar
                isPlaying={ isPlaying }
                onPause={ setPaused }
                onPlay={ setPlaying }
            />
            <Lanes
                lanes={ lanes.slice( 0, notes.length ) }
                isPlaying={ isPlaying }
                notes={ notes }
                playPosition={ playPosition }
            />
		</Box>
	);
};

export default StepSequencer;
