import * as React from 'react';
import { first } from 'lodash';
import styled from 'styled-components';

import Handpan from '../../components/Handpan';

import useInstrumentState from '../../state/useInstrumentsState';

const Container = styled.div`
	max-width: 960px;   
	margin: 0 auto;
	position: relative;
`;

const Heading = styled.h2`
	font-size: 2em;
	color: white;
	text-transform: capitalize;
`;

const Instrument = () => {
    // instrument state, as in, we might modify the instrument and need to store that change in data
    const [instrumentState, setInstrumentState] = useInstrumentState();

    // For now, lets keep the structure set up so that in the future 
    // we could expand to featuring multiple instruments...
    // To do that, lets assume that we have a number of 'instruments' 
    // but that number is, for now, always 1 
    const firstInstrument = first( instrumentState );

	return (
		<Container>
            { firstInstrument && (
                <Heading>{ firstInstrument.name }</Heading>
            ) }
            { firstInstrument && (
                <Handpan
                    rootNote={ firstInstrument.rootNote }
                    notes={ firstInstrument.notes }
                />
            ) }
		</Container>
	);
};

export default Instrument;
