import CreateCommunityModal from '@/components/Modal/CreateCommunity/CreateCommunityModal'
import { Flex, Icon, MenuItem, Text,Box } from '@chakra-ui/react'
import React,{useState} from 'react'
import { GrAdd } from 'react-icons/gr'
import { communityState } from '@/atoms/CommunityAtom'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import MenuListItem from './MenuListItem'
import { FaReddit } from 'react-icons/fa'

type Props = {}

const Communities:React.FC<Props> = () => {
 const[open,setOpen]=useState(false)
    const mySnippets=useRecoilValue(communityState).mySnippets
  return (
  <>
  
  <CreateCommunityModal open={open} handleClose={()=>setOpen(false)}/>
  


  <Box mt={3} mb={4}>
    <Text pl={3} mb={1} fontSize={"7pt"} fontWeight={500} color="gray.500">
    Moderating
    </Text>

 
  {mySnippets.filter((snippet)=>snippet.isModerator).map((snippet)=>(
   <><MenuListItem key={snippet.communityId} icon={FaReddit} displayText={`r/${snippet.communityId}`} 
   link={`/r/${snippet.communityId}`} iconColor={"blue.100"} imageURL={snippet. imageURL}/></>
  ))}
  </Box>
 


  <Box mt={3} mb={4}>
    <Text pl={3} mb={1} fontSize={"7pt"} fontWeight={500} color="gray.500">
      MY COMMUNITIES
    </Text>

  <MenuItem width="100%" fontSize="10pt" _hover={{bg:"gray.100"}} onClick={()=>setOpen(true)}>
  <Flex align="center">
<Icon as={GrAdd} mr={2} fontSize={20}/>
<Text>Create Community</Text>
  </Flex>
  
  </MenuItem>
  {mySnippets.map((snippet)=>(
   <><MenuListItem key={snippet.communityId} icon={FaReddit} displayText={`r/${snippet.communityId}`} 
   link={`/r/${snippet.communityId}`} iconColor={"blue.500"} imageURL={snippet. imageURL}/></>
  ))}
  </Box>
  </>
  )
}

export default Communities