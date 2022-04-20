import {
  Input,
  Box,
  Heading,
  Text,
  InputGroup,
  InputLeftAddon,
} from '@chakra-ui/react';

function WorkspaceInputs({}) {
  return (
    <>
      <Box textAlign={'center'} mb={[10]}>
        <Heading fontWeight={'semibold'} mb={[2]}>
          Let's setup a home for all your work
        </Heading>
        <Text color="gray.500">
          You can always create another workspace later
        </Text>
      </Box>
      <label for="workspace.name">Workspace Name</label>
      <Input
        placeholder="Eden"
        id="workspace.name"
        mt={[2]}
        size="lg"
        mb={[6]}
      />
      <label for="url">
        Workspace URL
        <Text display="inline" color="gray.500" ml={[1]}>
          (optional)
        </Text>
      </label>
      <InputGroup size="lg" mb={[6]} mt={[2]}>
        <InputLeftAddon children="www.eden.com/" color="gray.500" />
        <Input placeholder="Example" id="url" />
      </InputGroup>
    </>
  );
}

export default WorkspaceInputs;
