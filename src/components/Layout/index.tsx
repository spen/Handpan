import * as React from 'react';
import styled from 'styled-components';

const LayoutContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const Main = styled.div`
  flex-grow: 1;
  background-color: #202832;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ContentArea = styled.div`
  flex-grow: 1;
  background-color: #202832;
`;

export const Layout: React.FC<{}> = ({ children }) => {
  return (
    <LayoutContainer>
      {
        // Somewhere around here would be a good spot for placing navigation if we ever needed it,
        // or anything other more global UI components
      }
      <Main>
        <ContentArea>{children}</ContentArea>
      </Main>
    </LayoutContainer>
  );
};

export default Layout;
