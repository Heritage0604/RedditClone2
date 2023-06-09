import React, { useState } from "react";
import {
  Flex,
  Icon,
  Image,
  Skeleton,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import Linkify from 'react-linkify';
import { NextRouter } from "next/router";
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
    onVote:()=>{}
    onDeletePost:()=>{}
    onSelectPost:()=>void
}

const PostItem:React.FC<Props> = ({post,userIsCreator,userVoteValue,onVote,onDeletePost,onSelectPost}) => {
  return (
   <Flex border="1px solid" bg="white" borderColor="gray.300" borderRadius={4}
   _hover={{borderColor:"gray.500"}} cursor="pointer" onClick={onSelectPost}>
    <Flex direction="column" align="center" bg="gray.100" p={2} width="40px" borderRadius={4}>
<Icon as={userVoteValue===1 ? IoArrowUpCircleSharp :IoArrowUpCircleOutline} 
color={userVoteValue===1 ? "brand.100":'gray.400'}
fontSize={22} onClick={onVote}/>
<Text fontSize={"9pt"}>{post.voteStatus}</Text>
<Icon as={userVoteValue===-1 ? IoArrowDownCircleSharp :IoArrowDownCircleOutline} 
color={userVoteValue===-1 ? "#4379ff":'gray.400'}
fontSize={22} onClick={onVote}/>
    </Flex>
    <Flex direction="column" width="100%">

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
<Image src={post.imageURL} maxHeight={"460px"} alt="post Image"/>
  </Flex>
)}
</Stack>
<Flex>
  <Linkify></Linkify>
</Flex>
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
{userIsCreator && <Flex align="center" p={"8px 10px"} borderRadius={4}
_hover={{bg:"gray.200"}} cursor="pointer">
<Icon as= {AiOutlineDelete} mr={2}/>
<Text fontSize="9pt">Delete</Text>
</Flex>}
</Flex>
    </Flex>
   </Flex>
  )
}

export default PostItem