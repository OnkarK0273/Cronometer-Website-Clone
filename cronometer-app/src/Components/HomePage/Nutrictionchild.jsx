import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Icon,
    Text,
    Stack,
    HStack,
    VStack,
  } from '@chakra-ui/react';
  import { CheckIcon } from '@chakra-ui/icons';

function Nutrictionchild({title,des}) {
  return (
    <>
        <HStack  align={'top'} pb="40px">
              <Box color={'green.400'} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={700} fontSize="lg">{title}</Text>
                <Text w="70%" textAlign={'left'} >{des}</Text>
              </VStack>
        </HStack>
      
    </>
  )
}

export default Nutrictionchild
