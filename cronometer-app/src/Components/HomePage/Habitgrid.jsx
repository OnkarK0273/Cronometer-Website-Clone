import React from 'react'
import Habitgridchild from './Habitgridchild'
import { Grid, GridItem,Box } from '@chakra-ui/react'
function Habitgrid({data=[]}) {
  return (
    <Box>
        <Grid templateColumns='repeat(3, 1fr)' gap="40px" p="10px" >
            {
                data.map((e)=>{
                    return <Habitgridchild key={e.title} img={e.img} title={e.title} des={e.des}/>
                })
            }
        </Grid>
      
    </Box>
  )
}

export default Habitgrid
