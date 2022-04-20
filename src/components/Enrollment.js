import { useState } from 'react';
import { Box, Button } from '@chakra-ui/react';
import Header from 'components/Header';
import StepIndicator from 'components/StepIndicator';
import UserInputs from 'components/UserInputs';
import WorkspaceInputs from 'components/WorkspaceInput';
import PurposeInputs from 'components/PurposeInputs';
import Congratulations from 'components/Congratulations';

function getInputs(stepNumber) {
  switch (stepNumber) {
    case 1:
      return <UserInputs />;
    case 2:
      return <WorkspaceInputs />;
    case 3:
      return <PurposeInputs />;
    case 4:
      return <Congratulations />;
  }
}

function Enrollment() {
  const [step, setStep] = useState(1);
  const handleNextStep = () => {
    if (step === 4) alert('End of user flow');
    setStep(step + 1);
  };
  const jumpToStep = stepNumber => setStep(stepNumber);

  return (
    <Box maxWidth="500px" mx="auto" py={[8, 24]} px={[4, 0]}>
      <Header />
      <StepIndicator
        numberOfSteps={4}
        currentStep={step}
        onChange={jumpToStep}
      />
      {getInputs(step)}
      <Button size="lg" isFullWidth onClick={handleNextStep}>
        {step === 4 ? 'Launch Eden' : 'Create Workspace'}
      </Button>
    </Box>
  );
}

export default Enrollment;
