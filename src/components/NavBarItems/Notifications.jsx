import {Link, Text} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { IoBagOutline, IoNotificationsOutline, IoSearchOutline } from 'react-icons/io5'

function Notifications({sizeOfIcon, sizeOfText}) {
  return (
    <Link
    display={"flex"}
    to={"/"}
    as={RouterLink}
    alignItems={"center"}
    flexDirection={"column"}
    _hover={{bg: "gray.100"}}
    borderRadius={4}
    p={2}
    w={{base: 10, md: "full"}}
    justifyContent={"center"}
    >
        <IoNotificationsOutline size={sizeOfIcon} />
        <Text
        color={"black"}
        fontSize={sizeOfText}
        >
            Notificações
        </Text>
    </Link>
  )
}

export default Notifications