import { Highlight, Menu, MenuButton, MenuItem, MenuList,Button, } from '@chakra-ui/react'
import { ChevronDownIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import Manuitems from './Manuitems'
import React from 'react'

export default function Manubar() {
  return (
    <>
       <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon /> } >
                    Products
                </MenuButton>

                <Manuitems/>

        </Menu> 
      
    </>
  )
}
