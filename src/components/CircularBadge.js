import { Box } from '@chakra-ui/react';

function CircularBadge({ children, isFilled, size, ...rest }) {
  return (
    <Box
      display="flex"
      borderRadius={'50%'}
      bgColor={isFilled ? 'brand' : 'white'}
      color={isFilled ? 'white' : 'gray.600'}
      height={size}
      width={size}
      justifyContent="center"
      alignItems="center"
      borderWidth={1.5}
      borderColor={isFilled ? 'brand' : 'gray.200'}
      borderStyle="solid"
      sx={{ cursor: 'pointer' }}
      {...rest}
    >
      {children}
    </Box>
  );
}

export default CircularBadge;
