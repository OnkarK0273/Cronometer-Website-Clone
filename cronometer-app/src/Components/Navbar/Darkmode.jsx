import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Button,useColorMode, } from '@chakra-ui/react'
import React from 'react'

export default function Darkmode() {
    const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
     <Button onClick={toggleColorMode} size="sm" padding={4}>
        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
    </Button>
      
    </>
  )
}
