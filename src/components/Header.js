import { Heading, Box, Image } from '@chakra-ui/react';

function Header() {
  return (
    <Box
      display="flex"
      flexDir="row"
      alignItems="center"
      justifyContent="center"
      mb={10}
    >
      <Image src={process.env.PUBLIC_URL + 'logo.png'} boxSize="50px" />
      <Heading fontWeight="semibold" letterSpacing={-2}>
        Eden
      </Heading>
    </Box>
  );
}

export default Header;
