import useStickyState from '../../lib/useStickyState';

import defaultInstrument from './defaultInstrument';

// The point of this file is to allow other files a simple way to grab
// the data held locally for the instruments state.

// Example:
// const CalendarView = () => {
//     const [instrumentState, setInstrumentState] = useInstrumentState();
//     // Everything else unchanged
// }

const INSTRUMENTS_STICKY_KEY = 'HANDPAN_INSTRUMENTS';
const DEFAULT_VALUE = [
    defaultInstrument
];

export type InstrumentNote = {
    octave: Number,
    note: String, // Maybe not a string
}

export type Instrument = { 
    name: string,
    rootNote: InstrumentNote, 
    // notes should ideally be ordered from low to high, or vica versa.
    // we would have to have the saving process, or validation process before that, take care of it
    notes: InstrumentNote[],
}

export type Instruments = Instrument[];

// Here, we're using TypeScript to say that the defaultValue argument must be of type (:) Instruments,
// then we giving that argument a DEFAULT_VALUE. 
// Because DEFAULT_VALUE is a constant (i.e. it itself doesn't ever change)
// we use a standard convention to write the variable in SCREAMING_CASE, which is fun.
// The rest of the line, `export default function` is like saying 
// "This is a function that is exported for other files to use,
// as the default value (which will make sense later)
export default function( defaultValue: Instruments = DEFAULT_VALUE ) {
    return useStickyState( defaultValue, INSTRUMENTS_STICKY_KEY );
}
