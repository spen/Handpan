import * as React from 'react';
import styled from 'styled-components';

const LayoutContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;

  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#371860+0,001d59+100 */
    background: #371860; /* Old browsers */
    background: -moz-linear-gradient(-45deg,  #371860 0%, #001d59 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(-45deg,  #371860 0%,#001d59 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(135deg,  #371860 0%,#001d59 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#371860', endColorstr='#001d59',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */

`;

const Main = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ContentArea = styled.div`
  flex-grow: 1;
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
