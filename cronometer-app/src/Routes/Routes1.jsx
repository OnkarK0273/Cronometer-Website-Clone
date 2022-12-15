import { Route,Routes } from "react-router-dom";
import React from 'react'
import Home from "../Pages/Home";
import Signup from "../Pages/Signup";
function Routes1() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Signup" element={<Signup/>}/>
        </Routes>
      
    </div>
  )
}

export default Routes1
