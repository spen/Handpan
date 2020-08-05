import { Note } from '@tonaljs/tonal';

import { InstrumentNote } from '../../state/useInstrumentsContext';
import { chromaticColorMap } from '../../constants/chromaticNotes';
import simplifyNoteName from '../simplifyNoteName';

export const stringifyNote = ( note: InstrumentNote ) => `${ note.tone }${ note.octave }`;

export const getColorForNote = ( note: InstrumentNote ) => chromaticColorMap[ simplifyNoteName( Note.pitchClass( note.tone ), '#' ) ];