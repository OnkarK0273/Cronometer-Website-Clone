import React from 'react'
import Sidebar from './Sidebar'
import Routes2 from '../Routes/Routes2'
import Diary from './Diary'
import { Route,Routes } from "react-router-dom";
export default function Dashboard() {
  return (
    <div>
        <Sidebar>
          <Routes>
              <Route path="/Diary" element={<Diary/>}/>    
          </Routes>
        </Sidebar>

      
    </div>
  )
}
