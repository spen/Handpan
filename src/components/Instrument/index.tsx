import * as React from "react";
import {first} from "lodash";
import styled from "styled-components";

import Handpan from "../../components/Handpan";
import InstrumentContext from "../../state/useInstrumentsContext";
import useInstrumentReducer from '../../state/instrument/reducer';
import SequencerContext from "../../state/useSequencerContext";

const Container = styled.div`
  padding: 20px 20px 30px 20px;
`;

const InstrumentContainer = () => {
  const [state] = React.useContext(InstrumentContext);
  const { notes } = state;
  const { state: instState, addNote, removeNote, flashNote } =  useInstrumentReducer();

  React.useEffect(() => {
    // This code will be run every time count is changed
    console.log(instState); // or any other manipulation like HTTP request
  }, [instState]);

  return (
      <Container>
        <Handpan notes={notes} activeNotes={ instState }/>
      </Container>
  );
};

export default InstrumentContainer;
