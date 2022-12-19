import { Box, Flex, HStack } from "@chakra-ui/react";
import { useState,useEffect } from "react";
import Add from "../Components/Diary/Add";
import Add2 from "../Components/Diary/Add2";
import {food,exercise} from '../Data/Data'
import Display from "../Components/Diary/Display";
import { get,Post,get2,Post2 } from "../Data/Api";
import Display2 from "../Components/Diary/Display2";
export default function Diary() {
const [page,setPage] = useState(1)
const [foods,setfood] = useState([])
const [Exersize,setExersize] = useState([])

const handle = async ({page}) => {
  try {
    const data = await get({page});
    setfood(data.data);
  } catch (err) {
    console.log(err);
  }
};


const postData = (data)=>{
  Post(data)
  handle(page)
}

const handle2 = async ({page}) => {
  try {
    const data = await get2({page});
    setExersize(data.data);
  } catch (err) {
    console.log(err);
  }
};


const postData2 = (data)=>{
  Post2(data)
  handle2(page)
}





useEffect(()=>{

  handle({page})
  handle2({page})

},[page])

console.log(foods)

   

  return (
    <>
        <HStack>
            <Box>
                <Add data={food} postData={postData}/>
                <Add2 data={exercise} postData2={postData2}/>
                <Flex columnGap={2}>
                <Display data={foods}/>
                <Display2 data={Exersize}/>
                </Flex>
            </Box>
        </HStack>

      
    </>
  )
}
