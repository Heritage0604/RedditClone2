import { Community } from '@/atoms/CommunityAtom'
import { Box, Button, Flex, Icon, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { FaRedditSquare,FaReddit } from 'react-icons/fa'
import useCommunityData from '@/Hooks/useCommunityData'

type Props = {
    communityData:Community
}

const Header:React.FC<Props> = ({communityData}) => {
   
    const {communityStateValue, onJoinOrLeaveCommuity}=useCommunityData()
     const isjoined=communityStateValue.mySnippets.find(item=>item.community)
  return (
    <Flex direction="column" width="100%" height={"140px"}>
    <Box height="50%" bg="blue.400">     
    </Box>
    <Flex justify="center" flexGrow={1} bg="white">
        <Flex width="95%" maxWidth={"860px"} border="1px solid red">
            {communityData.imageURL ?(
                <Image/>
            ):(
 <Icon as={FaReddit} fontSize="64px" 
            position="relative" top={-3}
            color="blue.500"
            border="4px solid white"
            borderRadius={"50%"}/>
            )}
           <Flex padding="10px 16px">
            <Flex direction="column" mr={6}>
                <Text fontSize={"16pt"} fontWeight={800}>{communityData.id}</Text>
                <Text fontSize={"10pt"} fontWeight={600} color="gray.400">r/{communityData.id}</Text>
            </Flex>
            <Button onClick={()=>onJoinOrLeaveCommuity(communityData,isJoined)} height={"30px"} pr={6} pl={6} variant={isjoined?("outline"):"solid"}>{isjoined ? ("joined"):("join")}</Button>
           </Flex>
           
        </Flex>
    </Flex>
    </Flex>
  )
}

export default Header