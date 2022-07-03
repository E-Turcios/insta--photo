import React from 'react';
import Routes from './Routes';
import theme from './Theme/theme'
import "@fontsource/bellota"

import { ChakraProvider } from '@chakra-ui/react';

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes />
    </ChakraProvider>
  );
}
