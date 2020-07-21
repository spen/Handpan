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

export default function (defaultValue: Instrument = defaultInstrument): any[] {
  return React.useState( defaultValue );
}
