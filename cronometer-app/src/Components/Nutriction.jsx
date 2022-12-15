import {

    Flex,
    Box,
  
    Image,
 
  } from '@chakra-ui/react';
import Nutrictionchild from './Nutrictionchild';

function Nutriction({data=[]}) {
  return (
    <>
        <Flex justifyContent="space-between">
            <Box w="50%"><Image m="auto" w="55%" src="https://cdn1.cronometer.com/webflow/crono-mobile-hero-img-22x-1.png"/></Box>
            <Flex border={'0px'} flexDirection="column" justifyContent="center" w="45%" >{
                 data.map((e)=>{
                    return <Nutrictionchild key={e.title} title={e.title} des={e.des}/>
                })
                }
            </Flex>
        </Flex>
      
    </>
  )
}

export default Nutriction
