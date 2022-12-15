
import { Box, Heading,Text } from '@chakra-ui/react'

function Headingname({h1,h2}) {
  return (
    <Box pt="50px" pb="50px">
        <Heading size='2xl' border="0px" w="60%" m="auto">{h1}</Heading>
        <Text w="50%" m="auto" pt="10px" fontSize={18}>{h2}</Text>
    </Box>
  )
}

export default Headingname
