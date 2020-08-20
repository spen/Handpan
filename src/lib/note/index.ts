import { Note } from '@tonaljs/tonal';
import { simplify, enharmonic } from "@tonaljs/note";

import { InstrumentNote } from '../../state/instrument/types';
import { chromaticColorMap } from '../../constants/chromaticNotes';

type Accidental = "♭" | "#";

export const simplifyNoteName = (noteName: string, accidentaltype: Accidental = "#") =>
  simplify(
    noteName.indexOf(accidentaltype) >= 1 ? noteName : enharmonic(noteName)
  );

export const stringifyNote = ( note: InstrumentNote, accidentaltype: Accidental = '#' ) => 
    `${ simplifyNoteName( note.tone, accidentaltype ) }${ note.octave }`;

export const getColorForNote = ( note: InstrumentNote ) => chromaticColorMap[ simplifyNoteName( Note.pitchClass( note.tone ), '#' ) ];

