import * as React from "react";
import styled from "styled-components";

import Handpan from "../../components/Handpan";
import { InstrumentContext } from '../../state/instrument';

const Container = styled.div`
    padding: 20px 20px 30px 20px;
`;

const InstrumentContainer = () => {
  const { state: { activeNotes, instrument: { notes } } } = React.useContext( InstrumentContext );

  return (
        <Container>
            <Handpan notes={ notes } activeNotes={ activeNotes } />
        </Container>
    );
};

export default InstrumentContainer;
