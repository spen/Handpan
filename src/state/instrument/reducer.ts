import * as React from 'react';
import { includes, without } from 'lodash';

const ADD_NOTE = 'ADD_NOTE';
const REMOVE_NOTE = 'REMOVE_NOTE';

const defaultState = [];

export const instrumentReducer = (state, action) => {
    console.log( { state, action } );
    if( action.type === ADD_NOTE ) {
        const { note } = action;
        if ( ! includes( state, note ) ) {
            console.log( { note } );
            return [
                ...state,
                note,
            ];
        }  

        return state;
    }
    
    if( action.type === REMOVE_NOTE ) {
        const { note } = action;

        return without( state, note );
    }
}

function useInstrumentReducer( reducer = instrumentReducer ) {
    const [state, dispatch] = React.useReducer(reducer, defaultState);

    const removeNote = ( note ) => dispatch( { type: REMOVE_NOTE, note } )
    const addNote = ( note ) => dispatch( { type: ADD_NOTE, note } )
    const flashNote = ( note ) => {
        addNote( note );

        // setTimeout( () => removeNote( note ), 250 );
    }

    return {state, addNote, removeNote, flashNote}
}

export default useInstrumentReducer;
