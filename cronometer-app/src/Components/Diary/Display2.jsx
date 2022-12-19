import { Box, Flex, Heading} from "@chakra-ui/react";

export default function Display2({data}) {
  return (
    <>
        <Box border="1px" mt="10px">
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
