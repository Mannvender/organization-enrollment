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
    setStep(step + 1);
  };
  return (
    <Box maxWidth="500px" mx="auto" py={24}>
      <Header />
      <StepIndicator numberOfSteps={4} currentStep={step} />
      {getInputs(step)}
      <Button size="lg" isFullWidth onClick={handleNextStep}>
        {step === 4 ? 'Launch Eden' : 'Create Workspace'}
      </Button>
    </Box>
  );
}

export default Enrollment;
