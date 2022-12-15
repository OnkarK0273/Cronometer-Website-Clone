import React from 'react'
import {data1,data2,habit,habitdes,nutrition,nutritiondes} from '../Data/Data'
import Navbar from '../Components/Navbar'
import Playstore from '../Components/Playstore'
import Poster1 from '../Components/Poster1'
import Headingname from '../Components/Headingname'
import Habitgrid from '../Components/Habitgrid'
import Nutriction from '../Components/Nutriction'
import Syncapp from '../Components/Syncapp'
import Review from '../Components/Review'
import Footer from '../Components/Footer'

function Home() {
  console.log(data1)
  return (
    <div>
        <Navbar/>
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
