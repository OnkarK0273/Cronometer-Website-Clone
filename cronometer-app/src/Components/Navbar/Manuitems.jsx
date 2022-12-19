import { Highlight, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'

export default function Manuitems() {
  return (
    <>
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
      
    </>
  )
}
