import * as React from "react";
import { find, without } from 'lodash';

import handpanScales from '../../constants/handpanScales';
import transposeScale from '../../lib/transposeScale';
import defaultInstrument from "./defaultInstrument";

export type InstrumentNote = {
  octave: number;
  tone: string;
};

export type Instrument = {
  name: string;
  notes: InstrumentNote[];
};

const InstrumentContext = React.createContext<[Instrument, any]>([defaultInstrument, ({name, notes}) => ({name, notes})]);

export const InstrumentStateProvider = ({children}) => {
    const [state, setState] = React.useState(defaultInstrument);

    return (
      <InstrumentContext.Provider value={[state, setState]}>
        {children}
      </InstrumentContext.Provider>
    );
};

export const transposeAndUpdateScale = ( state, { rootNote, rootOctave, name }) => ({
    ...state,
    name,
    notes: transposeScale({
        root: {
            octave: rootOctave,
            tone: rootNote,
        },
        scale: find(handpanScales, { name }).notes,
    })
});

export default InstrumentContext;
