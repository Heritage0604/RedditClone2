import React, { useState } from "react";
import {
  Flex,
  Icon,
  Image,
  Skeleton,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react"
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
import Linkify from 'react-linkify';
import { NextRouter, useRouter } from "next/router";
import { AiOutlineDelete } from "react-icons/ai";
import { BsChat, BsDot } from "react-icons/bs";
import { FaReddit } from "react-icons/fa";
import {
  IoArrowDownCircleOutline,
  IoArrowDownCircleSharp,
  IoArrowRedoOutline,
  IoArrowUpCircleOutline,
  IoArrowUpCircleSharp,
  IoBookmarkOutline,
} from "react-icons/io5";
import { Post } from '@/atoms/PostAtom'
import Link from "next/link";
import moment from "moment";

type Props = {
    post:Post
    userIsCreator:boolean 
    userVoteValue?:number
    onVote:(event:React.MouseEvent<SVGElement>)=>{}
    onDeletePost:(post:Post)=>Promise<boolean>
    onSelectPost?:(post:Post)=>void
    home
}

const PostItem:React.FC<Props> = ({post,userIsCreator,userVoteValue,onVote,onDeletePost,onSelectPost}) => {
  const[loadingImage,setLoadingImage]=useState(true)
  const[loadingDelete,setLoadingDelete]=useState(false)
  const [error,setError] = useState(false)
  const router=useRouter()
const singlePostPage=!onSelectPost

  const handleDelete=async(event:React.MouseEvent<HTMLDivElement,MouseEvent>,post:Post)=>{
    event.stopPropagation()
    setLoadingDelete(true)
    try{
const success=await onDeletePost(post)
if(!success){
  throw new Error("failed to delete Post")
}
console.log("Post was successfully deleted")
if(singlePostPage){
  router.push(`/r/${post.communityId}`)
}
    }catch(error:any){
      console.log(error.message)
setError(true)
    }
      setLoadingDelete(false)
  }
  return (
   <Flex border="1px solid" bg="white" borderColor={singlePostPage ? "white":"gray.300"} borderRadius={singlePostPage ? "4px 4px 0px 0px" : "4px"}
   _hover={{borderColor:singlePostPage? "none":"gray.500"}} cursor={singlePostPage ? "unset":"pointer"} onClick={()=> onSelectPost && onSelectPost(post)}>


    <Flex direction="column" align="center" bg={singlePostPage ? "none":"gray.100"} p={2} width="40px" borderRadius={singlePostPage ? 0:4}>
<Icon as={userVoteValue===1 ? IoArrowUpCircleSharp :IoArrowUpCircleOutline} 
color={userVoteValue===1 ? "brand.100":'gray.400'}
fontSize={22} onClick={(event)=>onVote(event)}/>
<Text fontSize={"9pt"}>{post.voteStatus}</Text>
<Icon as={userVoteValue===-1 ? IoArrowDownCircleSharp :IoArrowDownCircleOutline} 
color={userVoteValue===-1 ? "#4379ff":'gray.400'}
fontSize={22} onClick={(event)=>onVote(event)}/>
    </Flex>
    <Flex direction="column" width="100%">
{error && (
  <Alert status='error'>
  <AlertIcon />
  <AlertTitle>Post Error!</AlertTitle>
  <AlertDescription>Couldn't Delete Post</AlertDescription>
</Alert>
)}
<Stack spacing={1} p={"10px"}>
<Stack direction="row" spacing={"0.6px"} align="center" fontSize="9pt">
<Text>
  Posted by u/ {post.creatorDisplayName} {moment(new Date(post.createdAt?.seconds * 1000)).fromNow()}
</Text>
</Stack>
<Text fontSize="12pt" fontWeight={600}>{post.title}</Text>
<Text fontSize="10pt" >{post.body}</Text>
{post.imageURL && (
  <Flex justify="center"align="center" p={2}>
    {loadingImage &&  (<Skeleton mt="4" height="200px" width="100%"/>)}
<Image src={post.imageURL} maxHeight={"460px"} alt="post Image"
display={loadingImage ? "none":"unset"} onLoad={()=>setLoadingImage(false)}/>
  </Flex>
)}
</Stack>
{/* <Flex>
  <Linkify>
  <Text color="blue.500" fontSize="9pt">https://chakra-ui.com/docs/components/button/usage</Text>
  </Linkify>
</Flex> */}
<Flex mr={1} mb={0.5} color="gray.500" >
<Flex align="center" p={"8px 10px"} borderRadius={4}
_hover={{bg:"gray.200"}} cursor="pointer">
<Icon as= {BsChat} mr={2}/>
<Text fontSize="9pt">{post.numberOfComments}</Text>
</Flex>
<Flex align="center" p={"8px 10px"} borderRadius={4}
_hover={{bg:"gray.200"}} cursor="pointer">
<Icon as= { IoArrowRedoOutline} mr={2}/>
<Text fontSize="9pt">Share</Text>
</Flex>
<Flex align="center" p={"8px 10px"} borderRadius={4}
_hover={{bg:"gray.200"}} cursor="pointer">
<Icon as= {IoBookmarkOutline} mr={2}/>
<Text fontSize="9pt">Save</Text>
</Flex>
{userIsCreator && 
<Flex  onClick={(event)=>handleDelete(event,post)} align="center" p={"8px 10px"} borderRadius={4}
_hover={{bg:"gray.200"}} cursor="pointer">
{loadingDelete ? (
<Spinner size="sm"/>
) : (
  <>
  <Icon as= {AiOutlineDelete} mr={2}/>
<Text fontSize="9pt">Delete</Text></>
)}
</Flex>
}
</Flex>
    </Flex>
   </Flex>
  )
}

export default PostItem