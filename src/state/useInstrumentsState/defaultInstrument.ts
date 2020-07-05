// Taken from https://www.meridianhandpans.co.uk/product-page/meridian-21-stainless-f-low-pygmy

export default {
    name: 'F Low Pygmy',
    rootNote: {
        octave: 2,
        tone: 'F', // Maybe not a string
    },
    // notes should ideally be ordered from low to high, or vica versa.
    // we would have to have the saving process, or validation process before that, take care of it
    notes: [
        {
            octave: 2,
            tone: 'G',
        },
        {
            octave: 2,
            tone: 'Ab',
        },
        {
            octave: 3,
            tone: 'C',
        },
        {
            octave: 3,
            tone: 'Eb',
        },
        {
            octave: 3,
            tone: 'F',
        },
        {
            octave: 3,
            tone: 'G',
        },
        {
            octave: 4,
            tone: 'C',
        },
    ]
}