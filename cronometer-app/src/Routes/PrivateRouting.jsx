import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { Authcontext } from '../Context/Auth' 



export default function PrivateRouting({chidren}) {
const{Auth}=useContext(Authcontext)

    if(Auth.isAuth){
        
    }


  return chidren
   
}
