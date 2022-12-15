import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    useColorMode,
  } from '@chakra-ui/react';

function Habitgridchild({img,title,des}) {
    const { colorMode } = useColorMode();
    
  return (
    <Box>
        <Box boxShadow='2xl' p='6' rounded='md' bg={colorMode=="light"?"white":"black"}  >
            <Box><Image src={img} w="50%" m="auto"/></Box>
            <Box><Heading fontSize={22} w="80%" m="auto" lineHeight="30px">{title}</Heading></Box>
            <Box pt="5px"><Text lineHeight="30px">{des}</Text></Box>
        </Box>
    </Box>
  )
}

export default Habitgridchild
