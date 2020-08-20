import { filter, find, without } from 'lodash';

import {
    FLASH_NOTE_START,
    FLASH_NOTE_END,
    INSTRUMENT_SCALE_SET,
} from './actionTypes';
import { InstrumentNote, Instrument } from './types';

interface ReducerStateInterface {
    activeNotes: InstrumentNote[];
    instrument: Instrument;
}

const instrumentReducer = ( state: ReducerStateInterface, action ) => {
    if ( action.type === FLASH_NOTE_START ) {
        const { note } = action;

        if ( ! find( state, note ) ) {
            return {
                ...state,
                activeNotes: [
                    ...state.activeNotes,
                    note,
                ],
            };
        }

        return state;
    }

    if ( action.type === FLASH_NOTE_END ) {
        const { note } = action;
        const matchingNote = find( state, note );
        const newActiveNotes = filter( without( state, matchingNote ) );

        return {
            ...state,
            activeNotes: newActiveNotes,
        };
    }

    if ( action.type === INSTRUMENT_SCALE_SET ) {
        const { notes, name } = action;

        return {
            ...state,
            instrument: {
                name,
                notes,
            },
        };
    }

    return state;
}

export default instrumentReducer;
