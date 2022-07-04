import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import theme from './Theme/theme'
import "@fontsource/bellota"
import { ChakraProvider } from '@chakra-ui/react';

const container = document.getElementById('app');

const root = createRoot(container);

root.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);
