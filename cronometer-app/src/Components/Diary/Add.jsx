import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useState } from "react";
import { Post } from "../../Data/Api";
import { FaAppleAlt } from "react-icons/fa";

export default function Add({data,postData}) {
    const [state, setState] = useState({
        name:'',Protein:0,Carbs:0,Fat:0
    })

    const handle = (data)=>{
        setState({
            ...state,
            name:data.name,
            Protein:data.Protein,
            Carbs:data.Carbs,
            Fat:data.Fat
        })

        postData(state)
    }

    // console.log("state",state)

   

  return (
    <Box >
      <Menu>
      <MenuButton as={Button} rightIcon={<FaAppleAlt />}>
        Add Food+
    </MenuButton>
        <MenuList value="Add Food">
           {
            data.map((el)=>{
                return <MenuItem key={el.fat} onClick={()=>{handle(el)}}>{el.name}</MenuItem>
            })
           }
        </MenuList>
      </Menu>
      
      
    </Box>
  )
}
