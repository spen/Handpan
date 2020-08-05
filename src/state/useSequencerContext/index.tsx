import * as React from "react";
import { includes, without } from "lodash";

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

export const setTempo = (state, bpm) => ({
    ...state,
    bpm,
});

export const toggleStep = (state, {laneIndex, stepIndex}) => {
    // Get the state for this lane
    const laneState = state.lanes[laneIndex];
    // This just makes `laneState.activeSteps` available as activeSteps
    const {activeSteps} = laneState;
    // Figure out if isActive will be true or false...
    const isActive = includes(activeSteps, stepIndex);
    // Then, using a ternary operator..., or add the item
    const newActiveSteps = isActive
        // either remove the stepIndex...
        ? without(activeSteps, stepIndex)
        // or add the stepIndex
        : [...activeSteps, stepIndex];
    // Then map over the lanes, finding and updating the activeSteps
    const newLanes = state.lanes.map((lane, i) => (
        laneIndex === i ? {...lane, activeSteps: newActiveSteps} : lane
    ));

    return {
        ...state,
        lanes: newLanes,
    }
}



export default SequencerContext;
