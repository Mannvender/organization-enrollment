import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from 'theme';
import Enrollment from 'components/Enrollment';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Enrollment />
    </ChakraProvider>
  );
}

export default App;
