import { Box, Flex, Heading} from "@chakra-ui/react";

export default function Display({data}) {
  return (
    <>
        <Box border="1px" mt="10px">
            <Heading p="5px" >Foods</Heading>
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
