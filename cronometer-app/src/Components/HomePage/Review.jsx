import {
    Box,
    
    Image,
    useColorMode,
  } from '@chakra-ui/react';
import Headingname from './Headingname';
 

function Review() {
    const { colorMode } = useColorMode();
  return (
    <>
        <Box bg={colorMode=="light"?"gray.100":"none"} mt="60px" pb="60px">
        <Headingname  h1="Cronometer reviews"/>
            <Box boxShadow='lg' p='6' rounded='md' bg='white' w="80%" m="auto" mb="50px"> <Image src="/images/review1.png"/> </Box>
            <Box boxShadow='lg' p='6' rounded='md' bg='white' w="80%" m="auto"> <Image src="/images/review2.png"/> </Box>
        </Box>
      
    </>
  )
}

export default Review
