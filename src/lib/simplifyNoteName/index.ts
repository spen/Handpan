import { simplify, enharmonic } from "@tonaljs/note";

type Accidental = "b" | "#";

// A#, # => A#
// A, # => A
// Bb, # => A#

const simplifyNoteName = (noteName: string, accidentaltype: Accidental = "#") =>
  simplify(
    noteName.indexOf(accidentaltype) >= 1 ? noteName : enharmonic(noteName)
  );

export default simplifyNoteName;
