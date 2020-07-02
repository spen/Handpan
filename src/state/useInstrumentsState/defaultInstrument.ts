// Taken from https://www.meridianhandpans.co.uk/product-page/meridian-21-stainless-f-low-pygmy

export default {
    name: 'F Low Pygmy',
    rootNote: {
        octave: 2,
        note: 'F', // Maybe not a string
    },
    // notes should ideally be ordered from low to high, or vica versa.
    // we would have to have the saving process, or validation process before that, take care of it
    notes: [
        {
            octave: 2,
            note: 'G',
        },
        {
            octave: 2,
            note: 'Ab',
        },
        {
            octave: 3,
            note: 'C',
        },
        {
            octave: 3,
            note: 'Eb',
        },
        {
            octave: 3,
            note: 'F',
        },
        {
            octave: 3,
            note: 'G',
        },
        {
            octave: 4,
            note: 'C',
        },
    ]
}