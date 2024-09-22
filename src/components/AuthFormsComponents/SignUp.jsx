import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { useState } from "react"


function SignUp() {
  const[inputs, setInputs] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    faithCommunity: "",
  })

  const[showPassword, setShowPassword] = useState(false)

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
      placeholder="Nome de usuário"
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
      value={inputs.username}
      size={"sm"}
      color={"black"}
      onChange={(e) => setInputs({...inputs, username: e.target.value})}
      />
       <Input 
      placeholder="Nome completo"
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
      value={inputs.fullName}
      size={"sm"}
      color={"black"}
      onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
      />

      <Input 
      placeholder="Nome de usuário"
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
      value={inputs.username}
      size={"sm"}
      color={"black"}
      onChange={(e) => setInputs({...inputs, username: e.target.value})}
      />
       <Input 
      placeholder="Comunidade de fé"
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
      value={inputs.faithCommunity}
      size={"sm"}
      color={"black"}
      onChange={(e) => setInputs({...inputs, faithCommunity: e.target.value})}
      />

      <InputGroup>
        <Input 
        placeholder="Senha"
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
        type={showPassword ? "text" : "password"}
        value={inputs.password}
        size={"sm"}
        color={"black"}
        onChange={(e) => setInputs({...inputs, password: e.target.value})}
        />

        <InputRightElement height={"full"}>
          <Button
          variant={"ghost"}
          size={"sm"}
          onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <ViewIcon color={"black"}/> : <ViewOffIcon color={"black"}/>}
          </Button>
        </InputRightElement>
      </InputGroup>


      <Button
      w={"full"}
      backgroundColor={"#FFA888"}
      size={"sm"}
      fontSize={"20px"}
      color={"black"}
      fontFamily={"Inter, sans-serif"}
      _hover={{background: "#FF8866"}}
      >
        Cadastrar
      </Button>
    </>
  )
}

export default SignUp