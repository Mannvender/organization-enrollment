import { useState } from 'react';
import { Box, Heading, Text, Icon } from '@chakra-ui/react';
import { IoMdPerson, IoMdPeople } from 'react-icons/io';

const OPTIONS = [
  {
    icon: IoMdPerson,
    value: 'myself',
    heading: 'For myself',
    description: 'Write better. Think more clearly. Stay organized.',
  },
  {
    icon: IoMdPeople,
    value: 'team',
    heading: 'With my team',
    description: 'Wikis, docs, tasks & projects, all in one place.',
  },
];

function PurposeInputs({}) {
  const [purpose, setPurpose] = useState(OPTIONS[0].value);
  const handleClick = () => {
    if (purpose === OPTIONS[0].value) setPurpose(OPTIONS[1].value);
    else setPurpose(OPTIONS[0].value);
  };
  return (
    <>
      <Box textAlign={'center'} mb={[10]}>
        <Heading fontWeight={'semibold'} mb={[2]}>
          How are you planning to use Eden?
        </Heading>
        <Text color="gray.500">
          We'll streamline your setup experience accordingly.
        </Text>
      </Box>
      <CustomSwitch value={purpose} onChange={handleClick} />
    </>
  );
}

function CustomSwitch({ value, onChange }) {
  return (
    <Box display={'flex'} flexDir="row" justifyContent="space-between" mb={[6]}>
      {OPTIONS.map(option => (
        <Box
          key={option.value}
          p={[5]}
          flexBasis="48%"
          borderWidth={[1]}
          borderStyle="solid"
          borderRadius={[4]}
          borderColor={value === option.value ? 'brand' : 'gray.200'}
          onClick={onChange}
          sx={{ cursor: 'pointer' }}
        >
          <Icon
            as={option.icon}
            w={8}
            h={8}
            color={value === option.value ? 'brand' : 'black'}
          />
          <Text fontWeight={[600]} my={[3]}>
            {option.heading}
          </Text>
          <Text fontSize={14} color="gray.500">
            {option.description}
          </Text>
        </Box>
      ))}
    </Box>
  );
}

export default PurposeInputs;
