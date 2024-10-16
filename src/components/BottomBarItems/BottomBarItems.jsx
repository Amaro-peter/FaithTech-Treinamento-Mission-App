import { Flex } from "@chakra-ui/react"
import Home from "../NavBarItems/Home"
import Search from "../NavBarItems/Search"
import Projetos from "../NavBarItems/Projetos"
import Notifications from "../NavBarItems/Notifications"
import LogOut from "../NavBarItems/LogOut"

function BottomBarItems({ sizeOfIcon, sizeOfText}) {
  return (
    <Flex
    direction={"row"}
    gap={10}
    w={"full"}
    height={"full"}
    justifyContent={"center"}
    alignItems={"center"}
    >
        <Home sizeOfIcon={sizeOfIcon} sizeOfText={sizeOfText} />
        <Search sizeOfIcon={sizeOfIcon} sizeOfText={sizeOfText} />
        <Projetos sizeOfIcon={sizeOfIcon} sizeOfText={sizeOfText} />
        <Notifications sizeOfIcon={sizeOfIcon} sizeOfText={sizeOfText} />
        <LogOut sizeOfIcon={sizeOfIcon} sizeOfText={sizeOfText} />
    </Flex>
  )
}

export default BottomBarItems
