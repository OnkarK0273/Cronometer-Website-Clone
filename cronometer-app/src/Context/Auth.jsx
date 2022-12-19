import{createContext,useState} from 'react'

export const Authcontext = createContext()

export default function Auth({children}) {
    const [user,setuser] = useState({
        isAuth:false,
        email:"",
        password:"",
        confirmpassword:"",
        gender:"male",
        day:null,
        month:"",
        year:null,
        height:null,
        weight:null
    })

    const login = (state)=>{

        setuser({...user,
            isAuth:true,
            email:state.email,
            password:state.password,
            confirmpassword:state.confirmpassword,
            gender:"male",
            day:state.day,
            month:state.month,
            year:state.year,
            height:state.height,
            weight:state.weight
        })
    }

    const logout = ()=>{
        setuser({...user,
            isAuth:false,
            email:"",
            password:"",
            confirmpassword:"",
            gender:"male",
            day:null,
            month:"",
            year:null,
            height:null,
            weight:null
        })
    }

  return (
    <Authcontext.Provider value={{Auth:user,login,logout}}>
        {
        children
        }  
    </Authcontext.Provider>
  )
}
