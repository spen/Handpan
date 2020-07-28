import * as React from "react";
import styled from "styled-components";
import {first} from "lodash";

import Instrument from "../../components/Instrument";
import InstrumentContext from "../../state/useInstrumentsContext";
import HandpanForm from "../HandpanForm";

const Container = styled.div`
  margin: 0 auto;
  position: relative;
  display: flex;
`;

const FormArea = styled.div`
  flex-grow: 1;
  margin: 20px;
`;

const Heading = styled.h2`
  font-size: 2em;
  color: white;
  text-transform: capitalize;
`;

export const HandpanPlayer = ({}) => {
    const [state] = React.useContext(InstrumentContext);
    const {name, notes} = state;
    const rootNote = first(notes);

    return (
    <Container>
        <Instrument />
        <FormArea>
            <Heading>{rootNote.tone} {name}</Heading>
            <HandpanForm />
        </FormArea>
    </Container>
    );
}

export default HandpanPlayer;
