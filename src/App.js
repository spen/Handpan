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
      darkBakground: "#202832",
      focus: "blueBright",
    }
  },
  formField: {
    extend: `
    flex-direction: row;
    align-items: center;
    margin:0;
    label {
      width: 65%;
    }
    `,
    border: 'none',
    label: {
      'color': 'white',
      margin: {
        bottom: 'none',
        top: 'none',
        left: 'small'
      }
    },
  },
  select: {
    background: {
      'color': 'darkBakground'
    },
    options: {
      container: {
        background: {
          'color': 'darkBakground',
          'opacity': '0.9'
        },
      },
      text: {
        'color': 'white',
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
