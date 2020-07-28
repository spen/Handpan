import { InstrumentNote } from '../../state/useInstrumentsContext';

export const stringifyNote = ( note: InstrumentNote ) => `${ note.tone }${ note.octave }`;
