import * as React from 'react';

import {
    FLASH_NOTE_START,
    FLASH_NOTE_END,
    INSTRUMENT_SCALE_SET,
} from './actionTypes';
import { InstrumentNote, Instrument } from './types';
import instrumentReducer from './reducer';
import defaultInstrument from './defaultInstrument';

const defaultState = {
    activeNotes: [],
    instrument: defaultInstrument,
};

interface ReducerStateInterface {
    activeNotes: InstrumentNote[];
    instrument: Instrument;
}

function useInstrumentReducer( reducer = instrumentReducer ) {
    const [ state, dispatch ] = React.useReducer( reducer, defaultState );

    const flashNote = ( note ) => {
        dispatch( { type: FLASH_NOTE_START, note } );

        setTimeout( () => dispatch( { type: FLASH_NOTE_END, note } ), 250 );
    }
    const setInstrument = ( { notes, name } ) => dispatch( { type: INSTRUMENT_SCALE_SET, notes, name } );

    return { state, flashNote, setInstrument };
}

interface SetInstrumentProps {
    notes: InstrumentNote[],
    name: string,
}

interface InstrumentContextInterface {
    state: ReducerStateInterface;
    flashNote: ( InstrumentNote ) => void;
    setInstrument: ( SetInstrumentProps ) => void;
}

export const InstrumentContext = React.createContext<InstrumentContextInterface>( {
    state: defaultState,
    flashNote: ( note ) => {},
    setInstrument: ( { notes, name } ) => {},
} );

export const InstrumentContainer = ( { children } ) => (
    <InstrumentContext.Provider value={ useInstrumentReducer() }>
        { children }
    </InstrumentContext.Provider>
);

export default InstrumentContainer;
