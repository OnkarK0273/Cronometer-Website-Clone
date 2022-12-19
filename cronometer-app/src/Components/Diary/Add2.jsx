import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useState } from "react";
import { Post2 } from "../../Data/Api";
import { FaRunning } from "react-icons/fa";

export default function Add2({data,postData2}) {
    const [state, setState] = useState({
        name:'',Burned:0
    })

    const handle = (data)=>{
        setState({
            ...state,
            name:data.name,
            Burned:data.Burned
        })

        postData2(state)
    }



  

  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<FaRunning />}>
            Add Exercize+
        </MenuButton>
        <MenuList>
           {
            data.map((el)=>{
                return <MenuItem key={el.name} onClick={()=>{handle(el)}}>{el.name}</MenuItem>
            })
           }
        </MenuList>
      </Menu>
      
      
    </>
  )
}