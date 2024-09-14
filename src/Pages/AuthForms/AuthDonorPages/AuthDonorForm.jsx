import { Box, Text, Container, Flex, VStack, Image } from "@chakra-ui/react"
import { useState } from "react"
import Login from "../../../components/AuthFormsComponents/Login"
import SignUp from "../../../components/AuthFormsComponents/SignUp"

function AuthDonorForm() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container maxH={"container.md"} padding={0}>
        <VStack justifyContent={"center"} alignItems={"center"} gap={4}>
          <Box 
          width={["100%", "75%", "50%"]}
          height={"auto"}
          margin={"0 auto"}
          >
            <Image src='./Mission.png' 
            width={"100%"}
            height={"auto"}
            alt='Mission App logo'
            />
          </Box>
          <VStack spacing={4} align={"stretch"}>
            <Box
            border={"1px solid black"}
            borderRadius={4}
            padding={5}
            >
              {isLogin ? (null) : (
                <Box
                justifyContent={"center"}
                alignItems={"center"}
                gap={2}
                my={2}
                w={"full"}
                >
                  <Text
                  textAlign={"center"}
                  fontSize={"2xl"}
                  fontFamily={"Inter, sans-serif"}
                  fontWeight={"bold"}
                  >
                    Cadastro de apoiador
                  </Text>
                </Box>
              )}

              <VStack spacing={4}>
                {isLogin ? <Login /> : <SignUp />}
              </VStack>

              {/* TEXTO OU*/}
              <Flex
              alignItems={"center"}
              justifyContent={"center"}
              my={4}
              gap={1}
              w={"full"}
              >
                <Box flex={2} h={"1px"} bg={"black"} />
                <Text
                mx={1}
                color={"black"}
                fontFamily={"Inter, sans-serif"}
                fontWeight={"bold"}
                >
                  OU
                </Text>
                <Box flex={2} h={"1px"} bg={"black"} />
              </Flex>
              <Flex
              justifyContent={"center"}
              alignItems={"center"}
              gap={2}
              my={1}
              w={"full"}
              >
                <Image src={"./googleLogo.png"} h={"6"} alt="Google logo" cursor={"pointer"} />
                <Text
                color={"blue.600"}
                fontSize={"20px"}
                fontFamily={"Inter, sans-serif"}
                cursor={"pointer"}
                >
                  Se cadastrar com o google
                </Text>
              </Flex>

              {isLogin ? (
                <Flex
                justifyContent={"center"}
                alignItems={"center"}
                gap={2}
                marginTop={7}
                w={"full"}
                >
                  <Text
                  color={"orange.700"}
                  fontSize={"20px"}
                  fontFamily={"Inter, sans-serif"}
                  cursor={"pointer"}
                  >
                    Esqueceu a senha?
                  </Text>
                </Flex>
              ) : (null)}

            </Box>

            <Box
            border={"1px solid black"}
            borderRadius={4}
            padding={5}
            >
              <Flex
              alignItems={"center"}
              justifyContent={"center"}
              >
                <Box
                mx={2}
                 fontFamily={"Inter, sans-serif"}
                 fontSize={"20px"}
                >
                  {isLogin ? "Não tem conta?" : "Já tem uma conta?"}
                </Box>
                <Box
                color={"orange.700"}
                fontFamily={"Inter, sans-serif"}
                fontSize={"20px"}
                cursor={"pointer"}
                onClick={() => setIsLogin(!isLogin)}
                >
                  {isLogin ? "Cadastre-se" : "Log in"}
                </Box>
              </Flex>
            </Box>
          </VStack>
        </VStack>
      </Container>
    </Flex>
  )
}

export default AuthDonorForm