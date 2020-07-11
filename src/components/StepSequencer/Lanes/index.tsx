import * as React from 'react';

import Lane from './Lane';

type LaneType = {
    stepsCount: number,
    activeSteps: number[],
};

type NoteType = {
    octave: number,
    tone: string,
};

interface LanesProps {
    lanes: LaneType[],
    isPlaying: boolean,
    notes: NoteType[],
    playPosition: number,
};

const Lanes = ( { lanes, isPlaying, notes, playPosition }: LanesProps ) => (
    <React.Fragment>
        { lanes.map( ( lane, i ) => (
            <Lane
                isPlaying={ isPlaying }
                lane={ lane }
                note={ notes[ i ] /* This needs improvement, what happens if notes[ 4 ] doesnt exist? Errors */ }
                playPosition={ playPosition % lane.stepsCount }
            />
        ) ) }
    </React.Fragment>
);

export default Lanes;
