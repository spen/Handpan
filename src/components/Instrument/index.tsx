import * as React from "react";
import {first} from "lodash";
import styled from "styled-components";

import Handpan from "../../components/Handpan";
import InstrumentContext from "../../state/useInstrumentsContext";

const Container = styled.div`
  padding: 20px;
`;

const InstrumentContainer = () => {
  const [state] = React.useContext(InstrumentContext);
  const {name, notes} = state;
  const rootNote = first(notes);
  
  return (
      <Container>
        <Handpan notes={notes} />
      </Container>
  );
};

export default InstrumentContainer;
