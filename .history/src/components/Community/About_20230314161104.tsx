import { Community } from '@/atoms/CommunityAtom'
import { Flex,Box } from '@chakra-ui/react'
import React from 'react'

type Props = {
    communityData:Community
}

const About:React.FC<Props> = ({communityData}) => {
  return (
 <Box position="sticky" top="14px">
<Flex justify="space-between" bg="blue.400" align="center" p={3} borderRadius="4px 4px 0px 0px">
<Text></Text>
</Flex>
<Flex></Flex>
 </Box>
  )
}

export default About