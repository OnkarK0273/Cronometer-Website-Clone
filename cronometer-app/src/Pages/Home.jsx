import React from 'react'
import {data1,data2,habit,habitdes,nutrition,nutritiondes} from '../Data/Data'
import Navbar from '../Components/HomePage/Navbar'
import Playstore from '../Components/HomePage/Playstore'
import Poster1 from '../Components/HomePage/Poster1'
import Headingname from '../Components/HomePage/Headingname'
import Habitgrid from '../Components/HomePage/Habitgrid'
import Nutriction from '../Components/HomePage/Nutriction'
import Syncapp from '../Components/HomePage/Syncapp'
import Review from '../Components/HomePage/Review'
import Footer from '../Components/HomePage/Footer'
import {
  Box,
  Container,
  Flex,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  chakra,
  VisuallyHidden,
  Heading,
} from '@chakra-ui/react';

function Home() {
  console.log(data1)
  return (
    <div>
        <Navbar/>
        <Box position={"absolute"} right="35px" zIndex={-1} >
            <Image src="/images/dotbg.png"/>
        </Box>
        <Poster1/>
        <Playstore/>
        <Headingname h1={habit} h2={habitdes}/>
        <Habitgrid data={data1}/>
        <Headingname h1={nutrition} h2={nutritiondes}/>
        <Nutriction data={data2}/>
        <Headingname h1="Sync with apps and devices" />
        <Syncapp/>
        <Review/>
        <Footer/>



    </div>
  )
}

export default Home
