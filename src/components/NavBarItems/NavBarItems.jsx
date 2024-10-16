import { Flex, Spacer } from "@chakra-ui/react"
import Home from "../NavBarItems/Home"
import Search from "./Search"
import Projetos from "./Projetos"
import Notifications from "./Notifications"
import ProfileLink from "./ProfileLink"
import LogOut from "./LogOut"

function NavBarItems({sizeOfIcon, sizeOfText}) {
  return (
    <Flex
    direction={"row"}
    gap={5}
    overflow={"auto"}
    whiteSpace={"nowrap"}
    textOverflow={"ellipsis"}
    >
        <Home sizeOfIcon={sizeOfIcon} sizeOfText={sizeOfText} />
        <Search sizeOfIcon={sizeOfIcon} sizeOfText={sizeOfText} />
        <Projetos sizeOfIcon={sizeOfIcon} sizeOfText={sizeOfText} />
        <Notifications sizeOfIcon={sizeOfIcon} sizeOfText={sizeOfText} />
        <ProfileLink sizeOfIcon={sizeOfIcon} sizeOfText={sizeOfText} />
        <Spacer />
        <Spacer />
        <Spacer />
        <LogOut sizeOfIcon={sizeOfIcon} sizeOfText={sizeOfText} />
    </Flex>
  )
}

export default NavBarItems
