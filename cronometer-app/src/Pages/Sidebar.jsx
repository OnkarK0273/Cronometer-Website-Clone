import React, { ReactNode } from 'react';
import Manuitems from '../Components/Navbar/Manuitems';
import Darkmode from '../Components/Navbar/Darkmode'
import { NavLink } from 'react-router-dom';
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Image,
  Stack
} from '@chakra-ui/react';
import { CiGrid42 } from "react-icons/ci";
import { FaAppleAlt ,FaChartBar,FaBook,FaInstagram, FaTwitter, FaYoutube} from "react-icons/fa";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from 'react-icons/fi';
import { MdOutlineHelpOutline } from 'react-icons/md';
import { IconType } from 'react-icons';
import { ReactText } from 'react';

interface LinkItemProps {
  name: string;
  icon: IconType;
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Dashboard', icon: CiGrid42,to:"/Dashboard" },
  { name: 'Diary', icon: FaBook ,to:"/Diary" },
  { name: 'Trending', icon: FaChartBar },
  { name: 'Foods', icon: FaAppleAlt },
  { name: 'Favourites', icon: FiStar },
  { name: 'Settings', icon: FiSettings },
  { name: 'Help', icon: MdOutlineHelpOutline },
];

export default function Sidebar({
  children,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" >
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
       
      </Box>
    </Box>
  );
}



const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('#272A3A', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Box><Image src="/images/logo.png" w="63px"/></Box>
        <Text fontSize={22} fontWeight="bold" color={'white'}>Cronometer</Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <hr />
      {LinkItems.map((link) => (

        <NavItem key={link.name} icon={link.icon} to={link.to}>
          {link.name}
        </NavItem>
      ))}
      <hr />
      <Flex mt="20px">
              <Image w="100px" m="auto" src="https://cdn1.cronometer.com/webflow/ios-icon.svg"/>
              <Image w="100px" m="auto" src="https://cdn1.cronometer.com/webflow/android-icon.svg"/>
        </Flex>
        <Stack mt="20px" direction={'row'} spacing={6} justifyContent="center" p="10px">
          
            <FaTwitter size={15} color="white" />
          
            <FaYoutube size={15} color="white" />
          
            <FaInstagram size={15} color="white" />
          
        </Stack>
    </Box>

  );
};


const NavItem = ({ icon, children,to, ...rest }) => {
  return (
    <Link href={to} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        color={'white'}
        _hover={{
          bg: 'blackAlpha.400',
          color: 'orange.400',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'orange.400',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};


const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}>
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Flex alignItems={'center'}
        display={{ base: 'flex', md: 'none' }}
        >
        <Image src="/images/logo.png" w="63px"/>
        <Text fontSize={22} fontWeight="bold" >Cronometer</Text>
      </Flex>

      <HStack spacing={{ base: '0', md: '6' }}>
        
        <IconButton
          size="sm"
          variant="ghost"
          aria-label="open menu"
          icon={<Darkmode/>}
        />
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell color='orange' />}
        />
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: 'none' }}>
              <HStack>
                
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                  <Text fontSize="sm">Account</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}>
              
              <Manuitems/>
              <MenuItem>Settings</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};
