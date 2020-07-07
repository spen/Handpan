export type NoteType = {
    octave: number,
    tone: string,
}

export default function ( note: NoteType ): string {
    return `${ note.tone }${ note.octave }`;
}
