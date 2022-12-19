import { Box, Flex, Heading} from "@chakra-ui/react";

export default function Display2({data}) {
  return (
    <>
        <Box  mt="10px"  p="10px" boxShadow='base'  rounded='md' bg='green.100'>
            <Heading p="5px" >Exersizes</Heading>
            <hr />
            <Flex textAlign={'left'} rowGap={3} p="5px" flexDirection={'column'}  >
                {
                    data.map((el)=>{
                        return (
                            <Heading key={el.id} size={10}>{el.name}</Heading>
                            )
                        })
                    }
            </Flex>
        </Box>
      
    </>
  )
}
