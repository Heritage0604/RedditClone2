import { Community } from '@/atoms/CommunityAtom'
import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

type Props = {
    communityData:Community
}

const Header:React.FC<Props> = ({communityData}) => {
  return (
    <Flex direction="column" width="100%" height={"140px"}>
    <Box height="50%" bg="blue.400">
        
    </Box>
    </Flex>
  )
}

export default Header