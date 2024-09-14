import {Button, Input} from "@chakra-ui/react"
import { em } from "framer-motion/client"
import { useState } from "react"

function Login() {
  const [inputs, setInputs] = useState({
    email:"",
    password: "",
  })

  return (
    <>
      <Input 
      placeholder="Email"
      sx={{
        "::placeholder": {
          color: "rgba(0, 0, 0, 0.5)",
        },
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
      border={"1px solid #b0b0b0"}
      width={"100%"}
      height={"40px"}
      borderRadius={"4px"}
      _hover={{border: "1px solid black"}}
      fontSize={20}
      type="email"
      value={inputs.email}
      size={"sm"}
      color={"black"}
      onChange={(e) => setInputs({...inputs, email: e.target.value})}
      />


      <Input 
      placeholder="Password"
      sx={{
        "::placeholder": {
          color: "rgba(0, 0, 0, 0.5)",
        },
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
      border={"1px solid #b0b0b0"}
      width={"100%"}
      height={"40px"}
      borderRadius={"4px"}
      _hover={{border: "1px solid black"}}
      fontSize={20}
      type="email"
      value={inputs.password}
      size={"sm"}
      color={"black"}
      onChange={(e) => setInputs({...inputs, password: e.target.value})}
      />

      <Button
      w={"full"}
      height={"50px"}
      borderRadius={10}
      background={"#FFA888"}
      color={"black"}
      size={"sm"}
      fontSize={"20px"}
      fontFamily={"Inter, sans-serif"}
      _hover={{background: "#FF8866"}}
      >
        Log in
      </Button>
    </>
  )
}

export default Login