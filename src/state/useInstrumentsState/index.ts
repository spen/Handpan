import * as React from "react";
import useStickyState from "../../lib/useStickyState";
import defaultInstrument from "./defaultInstrument";

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

// This is a good place to start explaning typescript.
// In typescript when we create functions (and other things) we try to define
// as much of the contract as possible. In the past, we didn't really do this
// much and it would often lead to more bugs going uncaught.
// It seems annoying, but just keep in mind that this "well defined contract" is the goal
// of what we're doing with TypeScript

// Here, I'm thinking about what a 'note' needs to be defined as in the context 
// of this module (useInstrumentState).
// As we get better at defining things like this, we'll realise that our whole app
// uses just a small number types.
// Trust me that things like this will eventually make natural sense and that it'll 
// help you write "better" code.
export type InstrumentNote = {
    // So far, We just need to if the note is a C3, an E3, an E4 or an F2...
    // so let's define this InstrumentNote as having a tone ('C') and an octave (4).
    octave: number,
    tone: string,
}


// And for now, the 'Instrument' entity needs just a few things,
// mostly just to know the scale/notes it has:
// - a name
// - a root note 
// - a list of notes in the scale
export type Instrument = { 
    name: string,
    // notice that we will know here that the rootNote has an octave and a tone, based on this class.
    rootNote: InstrumentNote, 
    // notes should ideally be ordered from low to high, or vica versa.
    // we would have to have the saving process, or validation process before that, take care of it
    notes: InstrumentNote[],
}
// This may seem silly to do, but it does have purpose, it's saying "Instruments is a list of Instrument(s)"
export type Instruments = Instrument[];

// Here, we're using TypeScript to say that the defaultValue argument must be of type (:) Instruments,
// then we giving that argument a DEFAULT_VALUE. 
// Because DEFAULT_VALUE is a constant (i.e. it itself doesn't ever change)
// we use a standard convention to write the variable in SCREAMING_CASE, which is fun.
// The rest of the line, `export default function` is like saying 
// "This is a function that is exported for other files to use,
// as the default value (which will make sense later)
//
// For now, I'm leaving the return value type as any[], which just means "an array of items of any types"
// we'll come back to this and be more specific and well defined. 
// The more defined we make the system the smoother it'll run.
export default function (defaultValue: Instruments = DEFAULT_VALUE): any[] {
    return React.useState( defaultValue );
    // TODO: Consider a better way than below to allow for state to be saved locally
    // as a back up, and eventually to a db per user.
//   return useStickyState(defaultValue, INSTRUMENTS_STICKY_KEY);
}

// A note on file names and the differences between jsx (& tsx) and js (& ts): 
// Because this file does not have anything that is JSX (as in the HTML-ish way we write components) in it
// we don't need to add the x, it's just a regular TypeScript file still, not a TypeScript+JSX file.
