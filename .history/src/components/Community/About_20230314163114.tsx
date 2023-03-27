import { Community } from '@/atoms/CommunityAtom'
import { Flex,Box,Text,Icon,Stack } from '@chakra-ui/react'
import React from 'react'
import {HiOutlineDotsHorizontal} from "react-icons/hi"

type Props = {
    communityData:Community
}

const About:React.FC<Props> = ({communityData}) => {
   
  return (
 <Box position="sticky" top="14px">
<Flex color="white" justify="space-between" bg="blue.400" align="center" p={3} borderRadius="4px 4px 0px 0px">
<Text fontSize="10pt" fontWeight={700} >About Community</Text>
<Icon as={HiOutlineDotsHorizontal}/>
</Flex>
<Flex direction="column" bg="white"  borderRadius="0px 0px 4px 4px"  p={3}>
<Stack>
    <Flex width="100%" p={2} fontSize="10pt">
        <Flex direction="column" flexGrow={1} fontWeight={700}>
            <Text>
           {communityData.numberofMembers.toLocaleString()}
            </Text>
            <Text>Members</Text>
        </Flex>
        <Flex direction="column" flexGrow={1}>
            <Text>1</Text>
            <Text>Online</Text>
        </Flex>
    </Flex>
</Stack>
</Flex>
 </Box>
  )
}

export default About