
import axios from 'axios'
import { useState } from 'react'
import {
    FormControl,
    FormLabel,
    Input,
    Button
  } from '@chakra-ui/react'
export default function Sgin() {
    localStorage.clear()
    const [userName,SetuserName]=useState("")
    const [password,Setpassword]=useState("")
    const signup = async()=>{
        await axios.post("https://6486cfe9beba6297278f36b8.mockapi.io/user",{userName,password}).then(res=>{
          localStorage.setItem('userName',res.data.userName)
          localStorage.setItem('password',res.data.password)
          localStorage.setItem('id',res.data.id)
        })
       console.log(localStorage);
       window.location.href="/yut"
      }

  return (
    <>
   <FormControl>
  <FormLabel>User name</FormLabel>
  <Input type='email' onChange={(e)=>SetuserName(e.target.value)} />
 
</FormControl>
<FormControl>
  <FormLabel>password</FormLabel>
  <Input type='password' onChange={(e)=>Setpassword(e.target.value)}/>
</FormControl>
    <Button onClick={signup}>signup</Button>
    
    
    </>
  )
}
