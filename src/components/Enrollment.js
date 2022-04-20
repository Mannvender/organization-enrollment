import { Heading, Box, Image } from '@chakra-ui/react';

function Enrollment() {
  return (
    <Box maxWidth="600px" mx="auto" p={24}>
      <Box
        display="flex"
        flexDir="row"
        alignItems="center"
        justifyContent="center"
      >
        <Image src={process.env.PUBLIC_URL + 'logo.png'} boxSize="50px" />
        <Heading fontWeight="semibold" letterSpacing={-2}>
          Eden
        </Heading>
      </Box>
    </Box>
  );
}

export default Enrollment;
