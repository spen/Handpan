import { InstrumentNote } from '../../state/useInstrumentsState';

export const stringifyNote = ( note: InstrumentNote ) => `${ note.tone }${ note.octave }`;
