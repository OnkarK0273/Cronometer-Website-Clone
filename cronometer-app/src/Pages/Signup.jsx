import React from 'react'
import Email from '../Components/SignupPage/Email';

import { NavLink } from 'react-router-dom';
import {
    Box,
    Flex,
    Image,
    Heading,
  } from '@chakra-ui/react';
export default function Signup() {
  return (
    < >
        <Box bg="#262A3B" color="white">
            <Flex alignItems={'center'}>
              <NavLink  to='/'><Image src='/images/logo.png' w='80px'/></NavLink>
              <NavLink  to='/'>  <Heading>Cronometer</Heading></NavLink>
            </Flex>
        </Box>
        
        <Box position={"absolute"} right="20px" zIndex={-1}  >
            <Image src="/images/dotbg.png"/>
        </Box>
        <Box p="30px"><Heading>Create Your Free Account</Heading></Box>
        <Email/>
        
        
    </>
  )
}
