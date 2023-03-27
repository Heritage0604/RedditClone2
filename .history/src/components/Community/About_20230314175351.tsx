import { Community } from '@/atoms/CommunityAtom'
import { auth } from '@/firebase/ClientApp'
import { Flex,Box,Text,Icon,Stack,Divider,Button } from '@chakra-ui/react'
import moment from 'moment'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React,{useRef} from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import {HiOutlineDotsHorizontal} from "react-icons/hi"
import {RiCakeLine} from "react-icons/ri"

type Props = {
    communityData:Community
}

const About:React.FC<Props> = ({communityData}) => {
   const router=useRouter()
   const [user]=useAuthState(auth)
   const selectedFileRef=useRef<string>()
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
        <Flex direction="column" flexGrow={1} fontWeight={700}>
            <Text>1</Text>
            <Text>Online</Text>
        </Flex>
    </Flex>
    <Divider/>
    <Flex align="center" width="100%" p={1} fontWeight={500} fontSize="10pt">
<Icon fontSize="18pt" mr={2} as ={RiCakeLine}/>
<Text>Created         {moment(
                      new Date(communityData.createdAt!.seconds * 1000)
                    ).format("MMM DD, YYYY")} </Text>
    </Flex>
    <Link href={`/r/${router.query.communityId}/submit`}>
        <Button width="100%" mt={3} height="30px">Create Post</Button>
    </Link>
    {user?.uid ===communityData.creatorId &&(
        <>
        <Divider/>
        <Stack>
            <Text fontWeight={600}>Admin</Text>
            <Flex align="center" justify="space-between">
<Text color="blue.500" cursor="pointer"  _hover={{textDecoration:"underline"}}>Change Image</Text>
            </Flex>
        </Stack>
        </>
    )} 
</Stack>
</Flex>
 </Box>
  )
}

export default About