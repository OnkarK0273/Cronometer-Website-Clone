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
  Highlight,
  Image,
} from '@chakra-ui/react';
import { ChevronDownIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';



export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box  px={4} border="0px" pt="30px" >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          
          
          <Flex alignItems={'center'}  >

            <Stack direction={'row'} >
                <Image src="/images/logo.png" w="63px"/>
                <Text fontSize={35} fontWeight="bold">Cronometer</Text>
            </Stack>

            <Stack direction={'row'} spacing={10} border="0px" alignItems={'center'} pl="20px" >
                <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon /> } >
                    Products
                </MenuButton>

                <MenuList p='10px' alignItems={'center'} >

                    <MenuItem> <Highlight
                        query='Basic'
                        styles={{ px: '3', py: '1', rounded: 'full', bg: 'orange.500' }}
                    >
                        Cronometer Basic
                    </Highlight></MenuItem>
                    <MenuItem>
                    <Highlight
                        query='Gold'
                        styles={{ px: '3', py: '1', rounded: 'full', bg: 'yellow.400' }}
                    >
                        Cronometer Gold
                    </Highlight></MenuItem>
                    <MenuItem>
                    <Highlight
                        query='Pro'
                        styles={{ px: '3', py: '1', rounded: 'full', bg: 'green.400' }}
                    >
                        Cronometer Pro
                    </Highlight></MenuItem>
                    
                </MenuList>

                </Menu>
                <Text alignItems={'center'} fontSize="lg" fontWeight="bold">Support</Text>
                <Text alignItems={'center'} fontSize="lg" fontWeight="bold">Blog</Text>
                <Text alignItems={'center'} fontSize="lg" fontWeight="bold">Forums</Text>
                <Text alignItems={'center'} fontSize="lg" fontWeight="bold">About</Text>
            </Stack>
          </Flex>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7} border="0px" alignItems={'center'} >
              <Button onClick={toggleColorMode} size="lg">
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Button colorScheme='teal' variant='outline' >
                SignUp
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
