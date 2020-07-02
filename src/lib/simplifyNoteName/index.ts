import { simplify, enharmonic } from '@tonaljs/note';

type easing = 'b' | '#';

// A#, # => A#
// A, # => A
// Bb, # => A#

const simplifyNoteName = ( noteName: string, accidentaltype: easing = '#' ) =>
    simplify( noteName.indexOf( accidentaltype ) >=1 ? noteName : enharmonic( noteName ) );

export default simplifyNoteName;
