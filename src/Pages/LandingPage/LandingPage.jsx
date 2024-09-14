import { Container, Flex, VStack, Image, Box } from '@chakra-ui/react'
import LandingPageButtons from './LandingPageButtons'
import React from 'react'

function LandingPage() {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container maxH={"container.md"} padding={0}>
        <VStack justifyContent={"center"} alignItems={"center"} gap={0}>
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
            <VStack gap={5} justifyContent={"center"}>
              <LandingPageButtons />

              <Box textAlign={"center"} fontWeight={"bold"} fontFamily={"Inter, sans-serif"}>
                Obtenha o app.
              </Box>

              <Flex gap={5} justifyContent={"center"}>
                <Image src="./google.png" h={"10"} alt={"Play store"} />
                <Image src="./apple.png" h={"10"} alt={"App store"} />
              </Flex>
            </VStack>
          </VStack>
        </VStack>
      </Container>
    </Flex>
  )
}

export default LandingPage