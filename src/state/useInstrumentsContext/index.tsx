import * as React from "react";
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

export default InstrumentContext;
