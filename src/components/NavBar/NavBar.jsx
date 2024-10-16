import { Avatar, Box, Flex, Image, Spacer } from '@chakra-ui/react'
import NavBarItems from '../NavBarItems/NavBarItems'

function NavBar( { isLargerThanBase } ) {
  return (
    <Box
    width={"full"}
    h={"45px"}
    borderBottom={"1px solid"}
    borderColor={"blackAlpha.400"}
    px={{base: 4, md: 8}}
    position={"fixed"}
    top={0}
    py={{base: 2, md: 4}}
    mb={0}
    zIndex={1000}
    bg={"white"}
    overflow={"hidden"}
    >
        {isLargerThanBase ? (
            <Flex
            direction={"row"}
            gap={10}
            w={"full"}
            height={"full"}
            alignItems={"center"}
            justifyContent={"center"}
            >
                <Image 
                src={"./Mission.png"}
                alt='Mission Logo'
                width={{base:"50%", md: "20%", lg: "10%"}}
                maxWidth={"200px"}
                minWidth={"100px"}
                height={"auto"}
                m={2}
                />

                <NavBarItems sizeOfIcon={"1.5em"} sizeOfText={"0.75em"} /> 
            </Flex>
        ) : (
            <Flex
            direction={"row"}
            gap={10}
            w={"full"}
            height={"full"}
            alignItems={"center"}
            justifyContent={"center"}
            >
                <Image 
                src={"./Mission.png"}
                alt='Mission Logo'
                width={{base:"50%", md: "20%", lg: "10%"}}
                maxWidth={"200px"}
                minWidth={"100px"}
                height={"auto"}
                m={2}
                />
                <Spacer />
                <Flex direction={"row"} cursor={"pointer"}>
                    <Avatar size={{base: "xs", sm: "xs", md: "xs"}} src='' />
                </Flex>
            </Flex>
        )}
    </Box>
  )
}

export default NavBar
