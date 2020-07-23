import * as React from 'react';
import styled from 'styled-components';
import { find, first } from 'lodash';
import { Select, Box, FormField } from 'grommet';
import { grommet } from 'grommet/themes';

import chromaticNotes from '../../constants/chromaticNotes';
import handpanScales from '../../constants/handpanScales';
import transposeScale from '../../lib/transposeScale';
import InstrumentContext from "../../state/useInstrumentsContext";

const Container = styled.div`
    max-width: 960px;
    flex-grow: 1;
`;

const OCTAVES = [ 2, 3, 4, 5 ];

const calculateInstrumentState = ( { rootNote, rootOctave, name } ) => ( {
    name,
    notes: transposeScale( {
        root: {
            octave: rootOctave,
            tone: rootNote,
        },
        scale: find( handpanScales, { name } ).notes,
    } )
} );

const HandpanForm = ( {} ) => {
    const [state, setState] = React.useContext(InstrumentContext);

    const { name, notes } = state;
    const  { tone, octave } = first(notes);

    const [ rootNote, setRootNote ] = React.useState( tone );
    const [ rootOctave, setRootOctave ] = React.useState( octave );
    const [ scale, setScale ] = React.useState( name );

    const handleChangeRootNote = event => {setRootNote( event.value );}
    const handleChangeRootOctave = event => {setRootOctave(event.value);}
    const handleChangeScale = event => {setScale(event.value);}

    React.useEffect(
        () => {
            const newState = calculateInstrumentState({ rootNote, rootOctave, name: scale });

            setState( newState );
        }, 
        [ rootNote, rootOctave, scale ]
    );

    return (
        <Container>
            <Box>
            <FormField label="Root Note" htmlFor="root-note-select">
                <Select
                    id="root-note-select"
                    value={rootNote}
                    onChange={handleChangeRootNote}
                    options={chromaticNotes}
                />
            </FormField>
            </Box>
            <Box>
                <FormField label="Root Octave" htmlFor="root-octave-select">
                <Select
                    id="root-octave-select"
                    value={rootOctave}
                    onChange={handleChangeRootOctave}
                    options={OCTAVES}
                />
                </FormField>
            </Box>
            <Box>
                <FormField label="Scale" htmlFor="scale-select">
                <Select
                    id="scale-select"
                    value={scale}
                    onChange={handleChangeScale}
                    options={handpanScales.map( scale => scale.name)}
                />
                </FormField>
            </Box>
        </Container>
    );
}

export default HandpanForm;
