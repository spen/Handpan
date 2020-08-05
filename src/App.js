import * as React from "react";
import styled, { createGlobalStyle } from "styled-components";
import "reset-css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Grommet } from "grommet";
import { grommet } from 'grommet/themes'

import HomePage from "./Pages/Home";
import Layout from "./components/Layout";
import { InstrumentStateProvider } from "./state/useInstrumentsContext";
import { SequencerStateProvider } from "./state/useSequencerContext";

const GlobalStyle = createGlobalStyle`
  body {
	background-color: #202832;
	margin: 0;
	min-height: 100vh;
    min-width: 100vw;
    font-family: sans-serif;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
`;


const theme = {
  ...grommet,
  global: {
    colors: {
      blue: "#359",
      blueBright: '#3c7af6',
      blueHover: '#3c6ad6',
      darkBackground: "#202832",
      darkBackgroundHighlight: "#2D3947",
      darkHover: "#353b48",
      selected: 'blueBright',
    //   contrast: '#ddd',
    },
    input: {
        padding: '12px',
    },
  },    
  formField: {
    border: 'none',
    label: {
      color: 'white',
      marginBotton: '-20px',
    },
  },
  button: {
    primary: {
        color: '#2196f3',
        active: {
          border: {
            color: 'red',
          },
        },
      },
      default: {
        color: 'brightBlue',
        border: undefined,
        padding: {
          horizontal: '12px',
          vertical: '8px',
        },
      },
  },
  select: {
    background: {
      color: 'blue'
    },
    options: {
      container: {
            background: {
                color: 'darkBackground',
            },
        },
      text: {
        color: 'white',
      }
    },
    icons: {
      color: 'white'
    },
  },
}

export const App = () => (
  <Wrapper>
    <GlobalStyle />
    <Grommet theme={ theme }>
        <InstrumentStateProvider>
        <SequencerStateProvider>
            <Layout>
                <HomePage />
            </Layout>
        </InstrumentStateProvider>
        </SequencerStateProvider>
    </Grommet>
  </Wrapper>
);
