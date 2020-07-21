import * as React from "react";
import styled from "styled-components";

import Instrument from "../../components/Instrument";

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  position: relative;
`;

export const HandpanPlayer = ({}) => (
  <Container>
    <Instrument />
  </Container>
);

export default HandpanPlayer;
