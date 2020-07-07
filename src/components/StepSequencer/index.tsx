import * as React from 'react';
import styled from 'styled-components';
import { includes, times } from 'lodash';
import { MdPlayArrow, MdPause } from 'react-icons/md';

import useInstrumentsState from '../../state/useInstrumentsState';
import useSequencerState from '../../state/useSequencerState';
import handpanSampler from '../../lib/handpanSampler';
import formatNote from '../../lib/note/formatNote';

const Container = styled.div`
	margin: 0 auto;
    position: relative;
    border: 4px solid #359;
    margin: 20px;
`;

const StepsBarContainer = styled.div`
    display: flex;
    flex-grow: 1;
`;

const LaneContainer = styled.div`
    display: flex;
`;

interface StepProps {
    isActive?: boolean;
    isPlaying?: boolean;
    isAtPlayPosition?: boolean;
}

// Note:
// It might be good to color each lane to match the colours of
// the handpan notes - more on that later but I have this thought of
// using color to show which note is which.
const Step = styled.div<StepProps>`
    background-color: ${
        ( { isActive, isAtPlayPosition, isPlaying } ) => (
            // This is admittedly a bit confusing to the naked eye!
            // This is basically a 'ternary within a ternary'.
            // See https://www.javascripttutorial.net/javascript-ternary-operator/ for more details
            isActive ? ( isAtPlayPosition && isPlaying ? '#58c' : '#359' ) : 'transparent'
        )
    }
    border: 1px solid rgba( 255, 255, 255, ${ props => props.isAtPlayPosition ? 0.6 : 0.2 } );
    flex-grow: 1;
    margin: 2px;
`;

const StepsBar = ( { stepsCount, activeSteps, playPosition, isPlaying } ) => {
    return (
        <StepsBarContainer>
            { times( stepsCount, n => (
                <Step
                    isActive={ includes( activeSteps, n ) }
                    isAtPlayPosition={ playPosition === n }
                    isPlaying={ isPlaying }
                />
            ) ) }
        </StepsBarContainer>
    );
}

const NoteLabel = styled.div`
    padding: 4px;
    color: #359;
    font-size: 1.2em;
    height: 26px;
    width: 40px;
`;

const LaneControls = ( { label } ) => {
    // TODO: make sound trigger when we click the label
    return (
        <NoteLabel>
            { label }
        </NoteLabel>
    );
}

export type LaneData = {
    muted: boolean,
    solo: boolean,
    stepsCount: number,
    activeSteps: number[],
};

const Lane = ( { lane, note, playPosition, isPlaying } ) => {
    const { stepsCount, activeSteps } = lane;

    React.useEffect(
        () => {
            const shouldPlayNote = (
                includes( activeSteps, playPosition ) &&
                handpanSampler.loaded &&
                note &&
                isPlaying
            );

            shouldPlayNote  &&
                handpanSampler.triggerAttack( formatNote( note ) )
        },
        // When we use useEffect like this, we give it an array
        // of arguments to sort of 'watch' for changes...
        // In this case if either `playPosition` or `isPlaying` changes,
        // the function logic above will run.
        [ playPosition, isPlaying ]
    );

    return (
        <LaneContainer>
            <LaneControls label={ formatNote( note ) } />
            <StepsBar
                stepsCount={ stepsCount }
                activeSteps={ activeSteps }
                isPlaying={ isPlaying }
                playPosition={ playPosition % stepsCount }
            />
        </LaneContainer>
    );
}

const IconButton = styled.span`
    background-color: rgba( 0, 0, 0, 0.2 );
`;

const SequencerContainer = styled.div`
    background-color: rgba( 100, 100, 100, 0.5 );
    padding; 4px;
    border: 2px solid rgba( 0, 0, 0, 0.2 );
`;

const SequencerControls = ( { bpm, isPlaying, onPause, onPlay } ) => {
    return (
        <SequencerContainer>
            <IconButton onClick={ isPlaying ? onPause : onPlay }>
                { isPlaying ? <MdPause /> : <MdPlayArrow /> }
            </IconButton>
            <span>
                BPM: { bpm }
            </span>
        </SequencerContainer>
    )
}

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

    // While we're working on things like this, we may want log out some values...
    // Here I'm logging sequencerState and instrumentState in a way that
    // I an see them in an object, with their names...
    // It's easier to see than if we just did the commentted out line below it:
    console.log( { sequencerState, instrumentState } );
    // console.log( sequencerState, instrumentState);

	return (
		<Container>
            <SequencerControls
                isPlaying={ isPlaying }
                onPause={ setPaused }
                onPlay={ setPlaying }
                bpm={ bpm }
            />
            { lanes.map( ( lane, i ) => (
                <Lane
                    isPlaying={ isPlaying }
                    lane={ lane }
                    note={ notes[ i ] /* This needs improvement, what happens if notes[ 4 ] doesnt exist? Errors */ }
                    playPosition={ playPosition % lane.stepsCount }
                />
            ) ) }
		</Container>
	);
};

export default StepSequencer;
