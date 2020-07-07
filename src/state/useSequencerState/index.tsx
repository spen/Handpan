import useStickyState from '../../lib/useStickyState';

import defaultState from './defaultState';

// For now, I've added this remove call to our local state.
// Otherwise new changes can't be seen in some state.
window.localStorage.removeItem( 'SEQUENCER_STATE' );

const SEQUENCER_STATE_STICKY_KEY = 'SEQUENCER_STATE';

export type SequencerState = {
    bpm: number,
    lanes: any[], // improve
}

export default function( defaultValue: SequencerState = defaultState ) {
    return useStickyState( defaultValue, SEQUENCER_STATE_STICKY_KEY );
}
