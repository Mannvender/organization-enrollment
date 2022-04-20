import { Fragment } from 'react';
import { Box } from '@chakra-ui/react';
import Progress from 'components/Progress';
import CircularBadge from 'components/CircularBadge';

function StepIndicator({ numberOfSteps = 4, currentStep, onChange }) {
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
        <Fragment key={index}>
          <CircularBadge
            size={12}
            isFilled={index < currentStep}
            onClick={() => onChange(index + 1)}
          >
            {index + 1}
          </CircularBadge>
          {index < numberOfSteps - 1 && (
            <Progress value={getProgressValue(index)} />
          )}
        </Fragment>
      ))}
    </Box>
  );
}

export default StepIndicator;
