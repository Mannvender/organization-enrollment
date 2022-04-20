import { Box } from '@chakra-ui/react';

function Progress({ value }) {
  return (
    <Box width={[14, 20]} height={0.5} display="flex" flexDir={'row'}>
      <Box height={'100%'} flexBasis={`${value}%`} bgColor="brand" />
      <Box height={'100%'} flexBasis={`${100 - value}%`} bgColor="gray.200" />
    </Box>
  );
}

export default Progress;
