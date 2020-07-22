import * as React from "react";
import {first} from "lodash";
import styled from "styled-components";

import Handpan from "../../components/Handpan";
import InstrumentContext from "../../state/useInstrumentsContext";

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
  const [state] = React.useContext(InstrumentContext);
  const {name, notes} = state;
  const rootNote = first(notes);

  return (
    <Container>
      <Heading>{rootNote.tone} {name}</Heading>
      <Handpan notes={notes} />
    </Container>
  );
};

export default Instrument;
