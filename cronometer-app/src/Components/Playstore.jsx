import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Text,
  Image,
} from '@chakra-ui/react';



export default function Playstore() {
 
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')}  px={4}>
        <Flex rowGap={3} p="10px" alignItems={'center'} justifyContent={'space-around'} flexDirection="column">
        <Text>As Seen in</Text>
        <Flex alignItems={'center'} justifyContent={'space-around'}>
          <Image w="20%" src="https://cdn1.cronometer.com/webflow/media-mention-2.svg"/> 
          <Image w="20%" src="https://cdn1.cronometer.com/webflow/media-mention-1.svg"/>
          <Image w="20%" src="https://cdn1.cronometer.com/webflow/media-mention-3.svg"/>
        </Flex>
        <Text>Available on Web, iOS and Android</Text>
        <Flex alignItems={'center'} justifyContent={'center'} w="50%" columnGap={10}>
         <Image w="20%" src="https://cdn1.cronometer.com/webflow/ios-icon.svg"/> 
         <Image w="20%" src="https://cdn1.cronometer.com/webflow/android-icon.svg"/>
          
        </Flex>
        </Flex>
      </Box>
    </>
  );
}