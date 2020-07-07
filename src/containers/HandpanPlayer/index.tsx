import * as React from 'react';
import styled from 'styled-components';

import Instrument from '../../components/Instrument';
import StepSequencer from '../../components/StepSequencer';

const Container = styled.div`
	max-width: 960px;
	margin: 0 auto;
	position: relative;
`;

export const HandpanPlayer = ( {} ) => {
	return (
		<Container>
            <Instrument />
            <StepSequencer />
		</Container>
	);
}

export default HandpanPlayer;
