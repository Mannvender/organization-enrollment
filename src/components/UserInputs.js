import { Input, Box, Heading, Text } from '@chakra-ui/react';
function UserInputs({ value }) {
  return (
    <>
      <Box textAlign={'center'} mb={[10]}>
        <Heading fontWeight={'semibold'} mb={[2]}>
          Welcome! First things first...
        </Heading>
        <Text color="gray.500">You can always change them later</Text>
      </Box>
      <label htmlFor="user.name">Full Name</label>
      <Input
        placeholder="Steve Jobs"
        id="user.name"
        mt={[2]}
        size="lg"
        mb={[6]}
      />
      <label htmlFor="user.display.name">Display Name</label>
      <Input
        placeholder="Steve"
        id="user.display.name"
        mt={[2]}
        size="lg"
        mb={[6]}
      />
    </>
  );
}

export default UserInputs;
