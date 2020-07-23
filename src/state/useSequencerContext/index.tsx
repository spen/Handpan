import * as React from "react";
import defaultState from "./defaultState";

export type Lane = {
    stepsCount: number,
    activeSteps: number[],
};

export type Sequencer = {
    bpm: number,
    lanes: Lane[],
}

const SequencerContext = React.createContext<[Sequencer, any]>(
    [
        defaultState,
        ({bpm, lanes}) => ({bpm, lanes})
    ]
);

export const SequencerStateProvider = ({children}) => {
    const [state, setState] = React.useState(defaultState);

    return (
      <SequencerContext.Provider value={[state, setState]}>
        {children}
      </SequencerContext.Provider>
    );
};

export default SequencerContext;
