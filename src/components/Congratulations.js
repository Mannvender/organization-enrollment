import { Heading, Box, Icon, Text } from '@chakra-ui/react';
import { IoMdCheckmark } from 'react-icons/io';
import CircularBadge from 'components/CircularBadge';

function Congratulations() {
  return (
    <Box
      display="flex"
      mb={10}
      justifyContent="center"
      flexDir="column"
      alignItems={'center'}
    >
      <CircularBadge isFilled size={14}>
        <Icon as={IoMdCheckmark} h={5} w={5} />
      </CircularBadge>
      <Heading fontWeight={'semibold'} mb={[2]} mt={[6]}>
        Congratulations, Eren!
      </Heading>
      <Text color="gray.500">
        You have completed onboarding, you can start using the Eden!
      </Text>
    </Box>
  );
}

export default Congratulations;
