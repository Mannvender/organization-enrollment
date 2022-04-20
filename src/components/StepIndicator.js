import { Box } from '@chakra-ui/react';
import Progress from 'components/Progress';

function StepIndicator({ numberOfSteps = 4, currentStep }) {
  const getProgressValue = i => {
    if (i === currentStep - 1) return 50;
    else if (i < currentStep - 1) return 100;
    else return 0;
  };
  return (
    <Box
      display="flex"
      flexDir="row"
      alignItems="center"
      justifyContent="center"
      mb={20}
    >
      {[...Array(numberOfSteps).keys()].map(index => (
        <>
          <StepNumber number={index + 1} isFilled={index < currentStep} />
          {index < numberOfSteps - 1 && (
            <Progress value={getProgressValue(index)} />
          )}
        </>
      ))}
    </Box>
  );
}

function StepNumber({ number, isFilled }) {
  return (
    <Box
      display="flex"
      borderRadius={'50%'}
      bgColor={isFilled ? 'brand' : 'white'}
      color={isFilled ? 'white' : 'gray.600'}
      height={12}
      width={12}
      justifyContent="center"
      alignItems="center"
      borderWidth={1.5}
      borderColor={isFilled ? 'brand' : 'gray.200'}
      borderStyle="solid"
    >
      {number}
    </Box>
  );
}

export default StepIndicator;
