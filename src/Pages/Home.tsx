import * as React from "react";
import styled from "styled-components";

import HandpanPlayer from "../containers/HandpanPlayer";
import StepSequencer from "../components/StepSequencer";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;

export const HomePage = ({}) => (
  <Container>
    <HandpanPlayer />
    <StepSequencer />
  </Container>
);

export default HomePage;
