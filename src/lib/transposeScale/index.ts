import { Note, Interval } from '@tonaljs/tonal';
import { first, isEmpty } from 'lodash';

import { stringifyNote } from '../../lib/note';

type instrumentNote = {
    tone: string;
    octave: number;
}

interface TransposeScaleProps {
    root: instrumentNote,
    scale: instrumentNote[],
}

export default function ({ root, scale }: TransposeScaleProps) {
    if (isEmpty(scale)) {
        return [];
    }

    const rootNoteDistance = Interval.distance(first(scale), stringifyNote(root));

    const transposeNote = note => {
        const transposedNote = Note.transpose(note, rootNoteDistance)

        return {
            tone: Note.pitchClass(transposedNote),
            octave: Note.octave(transposedNote),
        };
    }

    return scale.map(transposeNote);
}
