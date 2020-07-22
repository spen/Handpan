import * as React from 'react';
import styled from 'styled-components';
import { find, first } from 'lodash';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import chromaticNotes from '../../constants/chromaticNotes';
import handpanScales from '../../constants/handpanScales';
import transposeScale from '../../lib/transposeScale';
import InstrumentContext from "../../state/useInstrumentsContext";

const Container = styled.div`
    maw-width: 960px;
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

    const handleChangeRootNote = event => {setRootNote( event.target.value );}
    const handleChangeRootOctave = event => {setRootOctave(event.target.value);}
    const handleChangeScale = event => {setScale(event.target.value);}

    React.useEffect(
        () => {
            const newState = calculateInstrumentState({ rootNote, rootOctave, name: scale });

            setState( newState );
        },
        [ rootNote, rootOctave, scale ]
    );

    return (
        <Container>
            <FormControl>
                <InputLabel id="root-note-select-label">Root Note</InputLabel>
                <Select
                    labelId="root-note-select-label"
                    id="root-note-select"
                    value={rootNote}
                    onChange={handleChangeRootNote}
                >
                    {
                        chromaticNotes.map( note => (
                            <MenuItem value={ note }>{ note }</MenuItem>
                        ) )
                    }
                </Select>
            </FormControl>
            <FormControl>
                <InputLabel id="root-octave-select-label">Root Octave</InputLabel>
                <Select
                    labelId="root-octave-select-label"
                    id="root-octave-select"
                    value={rootOctave}
                    onChange={handleChangeRootOctave}
                >
                    {
                        OCTAVES.map( octaveNumber => (
                            <MenuItem value={ octaveNumber }>{ octaveNumber }</MenuItem>
                        ) )
                    }
                </Select>
            </FormControl>
            <FormControl>
                <InputLabel id="scale-select-label">Scale</InputLabel>
                <Select
                    labelId="scale-select-label"
                    id="scale-select"
                    value={scale}
                    onChange={handleChangeScale}
                >
                    {
                        handpanScales.map( handpanScale => (
                            <MenuItem value={ handpanScale.name }>{ handpanScale.name }</MenuItem>
                        ) )
                    }
                </Select>
            </FormControl>
        </Container>
    );
}

export default HandpanForm;
