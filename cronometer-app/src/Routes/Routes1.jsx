import { Route,Routes } from "react-router-dom";
import React from 'react'
import Home from "../Pages/Home";
import Signup from "../Pages/Signup";
import Dashboard from "../Pages/Dashboard";
import Diary from "../Pages/Diary";
import Sidebar from "../Pages/Sidebar";
function Routes1() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Signup" element={<Signup/>}/>
            <Route path="/Dashboard" element={<Dashboard/>}/>
            <Route path="/Diary" element={<Sidebar><Diary/></Sidebar>}/>
        </Routes>
      
    </div>
  )
}

export default Routes1
