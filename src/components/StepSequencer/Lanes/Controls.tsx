import * as React from 'react';
import styled from 'styled-components';

const NoteLabel = styled.div`
    padding: 4px;
    color: #359;
    font-size: 1.2em;
    height: 26px;
    width: 40px;
`;

interface LaneControlsProps {
    label: string,
}

const LaneControls = ( { label }: LaneControlsProps ) => {
    // TODO: make sound trigger when we click the label
    // (and add any other useful controls, like muting or soloing)
    return (
        <NoteLabel>
            { label }
        </NoteLabel>
    );
}

export default LaneControls;
