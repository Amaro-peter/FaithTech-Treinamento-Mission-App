import { Box, Flex } from '@chakra-ui/react'
import BottomBarItems from '../BottomBarItems/BottomBarItems'


function BottomBar() {
  return (
    <Box
    width={"full"}
    borderBottom={"1px solid"}
    borderColor={"blackAlpha.400"}
    px={2}
    position={"fixed"}
    py={{base: 1}}
    bottom={0}
    zIndex={1000}
    bg={"white"}
    >
        <Flex
        direction={"row"}
        gap={10}
        w={"full"}
        height={"full"}
        justifyContent={"center"}
        alignItems={"center"}
        >
            <BottomBarItems sizeOfIcon={"1.5em"} sizeOfText={"0.75em"} />
        </Flex>
    </Box>
  )
}

export default BottomBar
