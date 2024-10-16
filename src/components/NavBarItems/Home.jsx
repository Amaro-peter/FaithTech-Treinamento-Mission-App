import { Link, Text } from '@chakra-ui/react'
import React from 'react'
import { IoHomeOutline } from 'react-icons/io5'
import {Link as RouterLink} from 'react-router-dom'

function Home({sizeOfIcon, sizeOfText}) {
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
        <IoHomeOutline size={sizeOfIcon} />
        <Text
        color={"black"}
        fontSize={sizeOfText}
        >
            Home
        </Text>
    </Link>
  )
}

export default Home
