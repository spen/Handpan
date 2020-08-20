export type InstrumentNote = {
    octave: number;
    tone: string;
};

export type Instrument = {
    name: string;
    notes: InstrumentNote[];
};
