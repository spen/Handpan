import * as React from 'react';
import styled from 'styled-components';
import { Box } from 'grommet';

const NoteLabel = styled.div`
    padding: 4px;
    color: #359;
    font-size: 1.2em;
    height: 26px;
    width: 40px;
`;

interface LaneControlsProps {
    label: string,
    color?: string,
}

const LaneControls = ( { label, color = "red" }: LaneControlsProps ) => {
    // TODO: make sound trigger when we click the label
    // (and add any other useful controls, like muting or soloing)
    return (
        <Box
            pad="xsmall"
            width="42px"
            background="darkBackground"
            margin={ { right: 'xsmall' } }
        >
            { label }
        </Box>
    );
}

export default LaneControls;
