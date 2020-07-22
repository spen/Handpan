import * as React from "react";
import {first} from "lodash";
import styled from "styled-components";

import Handpan from "../../components/Handpan";
import useInstrumentState from "../../state/useInstrumentsState";

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
  const [instrumentState] = useInstrumentState();
  const {name, notes} = instrumentState;
  const rootNote = first(notes);

  return (
    <Container>
      <Heading>{rootNote.tone} {name}</Heading>
      <Handpan notes={instrumentState.notes} />
    </Container>
  );
};

export default Instrument;
