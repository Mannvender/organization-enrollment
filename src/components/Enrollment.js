import { Heading, Box, Image } from '@chakra-ui/react';
import Header from 'components/Header';
import StepIndicator from 'components/StepIndicator';

function Enrollment() {
  return (
    <Box maxWidth="600px" mx="auto" py={24}>
      <Header />
      <StepIndicator numberOfSteps={4} currentStep={1} />
    </Box>
  );
}

export default Enrollment;
