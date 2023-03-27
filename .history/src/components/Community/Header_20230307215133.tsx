import { Community } from '@/atoms/CommunityAtom'
import { Box, Flex, Icon } from '@chakra-ui/react'
import React from 'react'
import { FaRedditSquare,FaReddit } from 'react-icons/fa'

type Props = {
    communityData:Community
}

const Header:React.FC<Props> = ({communityData}) => {
  return (
    <Flex direction="column" width="100%" height={"140px"}>
    <Box height="50%" bg="blue.400">     
    </Box>
    <Flex justify="center" flexGrow={1} bg="white">
        <Flex width="95%" maxWidth={"860px"} border="1px solid red">
            <Icon as={FaReddit} fontSize="64px"/>
        </Flex>
    </Flex>
    </Flex>
  )
}

export default Header