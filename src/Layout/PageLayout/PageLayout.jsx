import { VStack, Text, Box } from '@chakra-ui/react'

function PageLayout({children}) {
  return (
    <VStack minH={"100vh"} spacing={0}>
        <Box flex={1} w={{base:"calc(100% - 70px)", md:"calc(100%-240px)"}} mx={"auto"}> 
          {children}
        </Box>
    </VStack>
  )
}

export default PageLayout