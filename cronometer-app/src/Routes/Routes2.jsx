import React from 'react'
import { Route,Routes } from "react-router-dom";
import Diary from '../Pages/Diary';
export default function Routes2() {
  return (
    <div>
        <Routes>
            <Route path="/Dashboard/Diary" element={<Diary/>}/>
            
        </Routes>
      
    </div>
  )
}
