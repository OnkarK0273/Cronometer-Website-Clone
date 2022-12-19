import Progress from './Progress'
import { Box, Flex, Heading } from '@chakra-ui/react'
import {useState,useEffect} from 'react'

export default function Summary({food,exercise}) {
    const [energy,setEnergy] = useState(0)
    const [Protein,setProtein] = useState(0)
    const [Carbs,setCarbs] = useState(0)
    const [Fat,setFat] = useState(0)

    console.log(food)
    

    let sum = function(acc,ele){
        return acc+ele.Protein
    }

    let protineSum = food.reduce(sum,0)

    let sum2 = function(acc,ele){
        return acc+ele.Carbs
    }

    let carbSum = food.reduce(sum2,0)

    let sum3 = function(acc,ele){
        return acc+ele.Fat
    }

    let fatSum = food.reduce(sum3,0)

    let sum4 = function(acc,ele){
        return acc+ele.Burned
    }

    let energySum = exercise.reduce(sum4,0)

    

    useEffect(()=>{
        setProtein(protineSum)
        setCarbs(carbSum)
        setFat(fatSum)
        setEnergy(energySum)
    },[food,exercise])
    

    const persontage = (val,setval)=>{

        return (val/setval)*100

    }
    
    
    

    //enrgy - 1782 protine - 111 carbs - 200 fat - 60

    const energyPersontage = persontage(energy,1782)
    const protinePersontage = persontage(Protein,111)
    const carbsPersontage = persontage(Carbs,200)
    const fatPersontage = persontage(Fat,60)
    

    console.log(energyPersontage,protinePersontage,carbsPersontage,fatPersontage)






    

    
  return (
    <>
        <Flex mt="20px"  justifyContent="space-around" p="10px" boxShadow='md'  rounded='md' bg='whiteAlpha.200'>
            <Box>
                <Progress val={Math.ceil(energyPersontage)} color="blue.400"/>
                <Heading size={'md'}>Energy</Heading>
            </Box>
            <Box>
                <Progress val={Math.ceil(protinePersontage)} color="orange.400"/>
                <Heading size={'md'}>Protine</Heading>
            </Box>
            <Box>
                <Progress val={Math.ceil(carbsPersontage)} color="gray.400"/>
                <Heading size={'md'}>Carbs</Heading>
            </Box>
            <Box>
                <Progress val={Math.ceil(fatPersontage)} color="red.400"/>
                <Heading size={'md'}>Fat</Heading>
            </Box>
        </Flex>


    </>
  )
}
