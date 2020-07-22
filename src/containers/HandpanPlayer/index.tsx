import * as React from "react";
import styled from "styled-components";

import Instrument from "../../components/Instrument";
import HandpanForm from "../HandpanForm";

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  position: relative;
`;

export const HandpanPlayer = ({}) => (
  <Container>
    <Instrument />
    <HandpanForm />
  </Container>
);

export default HandpanPlayer;
