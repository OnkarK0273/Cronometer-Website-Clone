import Manubar from '../Navbar/Manubar';
import Darkmode from '../Navbar/Darkmode';
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
  Highlight,
  Image,
} from '@chakra-ui/react';
import { ChevronDownIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';


export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box  px={4} border="0px" pt="30px" >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          
          
          <Flex alignItems={'center'}  >

            <Stack direction={'row'} >
              <NavLink  to='/'> <Image src="/images/logo.png" w="63px"/></NavLink>
              <NavLink  to='/'><Text fontSize={35} fontWeight="bold">Cronometer</Text></NavLink>  
            </Stack>

            <Stack direction={'row'} spacing={10} border="0px" alignItems={'center'} pl="20px" >
               <Manubar/>
                <Text alignItems={'center'} fontSize="lg" fontWeight="bold">Support</Text>
                <Text alignItems={'center'} fontSize="lg" fontWeight="bold">Blog</Text>
                <Text alignItems={'center'} fontSize="lg" fontWeight="bold">Forums</Text>
                <Text alignItems={'center'} fontSize="lg" fontWeight="bold">About</Text>
            </Stack>
          </Flex>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7} border="0px" alignItems={'center'} >
              <Darkmode/>
              <Button colorScheme='teal' variant='outline' >
                <NavLink  to='/Signup'>SignUp</NavLink>
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
