import { Route,Routes } from "react-router-dom";
import React from 'react'
import Home from "../Pages/Home";
function Routes1() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
      
    </div>
  )
}

export default Routes1
