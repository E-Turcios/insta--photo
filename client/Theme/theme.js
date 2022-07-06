import { extendTheme } from '@chakra-ui/react';
import '@fontsource/bellota';

const theme = extendTheme({
  fonts: {
    titleHeading: { Heading: 'Bellota' },
  },
});

export default theme;
