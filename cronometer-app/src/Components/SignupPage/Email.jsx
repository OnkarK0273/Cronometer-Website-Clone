import React from 'react'
import { Authcontext } from '../../Context/Auth'
import { Navigate } from 'react-router-dom'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Box,
    Flex,
    Input,
    Text,
    Alert,
    AlertIcon,
    Button,
    Select,
    option,
    Tooltip,
    Heading,
    Radio,
    VStack
  } from '@chakra-ui/react'




export default function Email() {
  const{Auth,login}= React.useContext(Authcontext) 

 

    const [user,setuser] = React.useState({
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
    if(Auth.isAuth){
        return <Navigate to='/Dashboard'/>  
    }
    console.log(Auth)

    const {email,password,confirmpassword,day,month,year,weight,height} = user

    const onchange =(e)=>{
        let name = e.target.name
        let val = e.target.value

        setuser({...user,[name]:val})
    }

    const submit = () =>{
        login(user)
    }




    

    const error1 = 0 < email.length && email.length <5 
    

  return (
    <>
        <Flex w="70%" m="auto" justifyContent={'center'}  boxShadow='base' columnGap={5} p='45px' rounded='md' mb='30px' bg="purple.50">
            <Box  w='20%'>
                <FormControl>
                    <Flex flexDirection={'column'} rowGap="25px"   >
                        <FormLabel  fontWeight={'semibold'}>Email</FormLabel >
                        <FormLabel fontWeight={'semibold'}>Password</FormLabel>
                        <FormLabel fontWeight={'semibold'}>Conform Password</FormLabel>
                    </Flex>
                </FormControl>
            </Box>
            <Box w="50%"   p="10px">
                <FormControl>
                    <Flex flexDirection={'column'} rowGap="10px" >
                        <Input isInvalid errorBorderColor='gray.400' type='email' name='email' placeholder="Email Address" value={email}  onChange={onchange}/>
                        {
                            error1?<Alert status='error'>
                            <AlertIcon />
                            Email is required.
                          </Alert>:false
                        }
                        <Input isInvalid errorBorderColor='gray.400' type='password' name='password'  placeholder="Password" value={password} onChange={onchange} />
                        <Input isInvalid errorBorderColor='gray.400' type='password'name='confirmpassword' placeholder="confirm password" value={confirmpassword} onChange={onchange} />
                    </Flex>
                </FormControl>
            </Box>
           

        </Flex>
        <Flex bg="purple.50" w="70%" m="auto" justifyContent={'center'} boxShadow='base' p='45px' rounded='md' columnGap={5} mb='30px'>

            <Box   w='20%'>
                <FormControl>
                    <Flex flexDirection={'column'} rowGap="25px" justifyContent={'center'}  >
                        <FormLabel fontWeight={'semibold'}>Sex</FormLabel>
                        <FormLabel fontWeight={'semibold'}>Birthday</FormLabel>
                        <FormLabel fontWeight={'semibold'}>Height</FormLabel>
                        <FormLabel fontWeight={'semibold'}>Weight</FormLabel>
                    </Flex>
                </FormControl>
            </Box>

            <Box   w="50%" p="10px">
                <FormControl>
                    <Flex flexDirection={'column'} rowGap="10px" >
                        <Flex>
                            <input type="checkbox" name="" id="" /><FormLabel ml='10px'>Male</FormLabel>
                            <input type="checkbox" name="" id="" /><FormLabel ml='10px'>Female</FormLabel>
                        </Flex>
                        <Flex>
                            <Tooltip label="Day" aria-label='A tooltip'>
                                <Select isInvalid errorBorderColor='gray.400' name="day" value={day} onChange={onchange} >
                                    <option>1</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                </Select>
                            </Tooltip>
                            <Tooltip label="Month" aria-label='A tooltip'>
                                <Select isInvalid errorBorderColor='gray.400' name="month" value={month} onChange={onchange} >
                                    <option>January</option>
                                    <option>February</option>
                                    <option>March</option>
                                    <option>April</option>
                                    <option>May</option>
                                </Select>
                            </Tooltip>
                            <Tooltip label="Year" aria-label='A tooltip'>
                                <Input type="number" isInvalid errorBorderColor='gray.400' name="year" value={year} onChange={onchange} />
                            </Tooltip>
                        </Flex>
                        <Flex>                           
                            <Input isInvalid errorBorderColor='gray.400' type="number" w='80px' name="height" value={height} onChange={onchange} />
                            <FormLabel ml="5px">Cm.</FormLabel>
                        </Flex>
                        <Flex>                           
                            <Input isInvalid errorBorderColor='gray.400' type="number" w='80px' name="weight" value={weight} onChange={onchange}/>
                            <FormLabel ml="5px">Kg.</FormLabel>
                        </Flex>
                    </Flex>
                </FormControl>
            </Box>


        </Flex>

        <Flex bg="purple.50" w="70%" m="auto" justifyContent={'center'} boxShadow='base' p='45px' rounded='md' columnGap={5} flexDirection={'column'}>
            <Heading size='lg'>Terms of Service & Privacy Settings</Heading>

            <VStack textAlign={'left'} alignItems="left" spacing={5} w="70%" m='auto' pt="20px">
                <Box  >
                    <Radio >
                    Check All
                    </Radio>                     
                    <Text ml="25px" fontWeight={'semibold'} pt="5px">
                        By checking the box below you are indicating you have read and agree to our Terms of Service and Privacy Policy.
                    </Text>
                </Box>
                <Box  >
                    <Radio >
                    I agree to the Cronometer Terms of Service and Privacy Policy.
                    </Radio>
                    <Text ml="25px" fontWeight={'semibold'} pt="5px">
                    In order to give you the best experience using Cronometer, we need certain data permissions. (These are optional and can be updated in your settings any time.)
                    </Text>
                </Box>
                <Box>
                    <Radio >
                    I agree to receive Cronometer newsletter and promotional emails. (You can opt out at any time.)
                    </Radio>
                </Box>
                <Box>
                    <Radio >
                    I agree to receive personalized in-app ads.(You will receive less relevant, non-personalized ads if you opt out)
                    </Radio>
                </Box>


            </VStack>



        </Flex>


        <Button p="20px" m="30px" bg="green.400" onClick={submit} >SIGN UP</Button>

      
    </>
  )
}
