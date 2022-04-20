import { extendTheme } from '@chakra-ui/react';

const brand = '#664de5';
const theme = extendTheme({
  styles: {
    global: {
      label: {
        fontWeight: 600,
      },
    },
  },
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
  },
  colors: {
    brand,
  },
  components: {
    Button: {
      variants: {
        solid: {
          backgroundColor: brand,
          color: 'white',
          fontSize: '16px',
          fontWeight: 600,
          _hover: {
            bg: '#3d2e89',
          },
        },
      },
    },
  },
});

export default theme;
