import {Link, Text} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { IoBagOutline, IoSearchOutline } from 'react-icons/io5'

function Projetos({sizeOfIcon, sizeOfText}) {
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
        <IoBagOutline size={sizeOfIcon} />
        <Text
        color={"black"}
        fontSize={sizeOfText}
        >
            Projetos
        </Text>
    </Link>
  )
}

export default Projetos