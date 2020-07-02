import * as React from 'react';
import styled from 'styled-components';

import HandpanPlayer from '../containers/HandpanPlayer';

const Container = styled.div`
    max-width: 960px;
    margin: 0 auto;
    position: relative;
`;

export const HomePage = ( {} ) => (
    <Container>
        <HandpanPlayer />
    </Container>
);

export default HomePage;
