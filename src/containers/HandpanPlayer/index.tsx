import * as React from "react";
import styled from "styled-components";
import { first } from "lodash";

import Instrument from "../../components/Instrument";
import { InstrumentContext } from "../../state/instrument";
import HandpanForm from "../HandpanForm";

const Container = styled.div`
	margin: 0 auto;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const FormArea = styled.div`
    flex-grow: 1;
    margin: 20px;
`;

const Heading = styled.h2`
	font-size: 2em;
	color: white;
	text-transform: capitalize;
	margin-top: 0;
`;

export const HandpanPlayer = () => {
    const { state: { instrument: { notes, name } } } = React.useContext( InstrumentContext );
    const rootNote = first( notes );

    return (
    <Container>
        <Instrument />
        <FormArea>
            <Heading>{ rootNote.tone } { name }</Heading>
            <HandpanForm />
        </FormArea>
    </Container>
    );
}

export default HandpanPlayer;
