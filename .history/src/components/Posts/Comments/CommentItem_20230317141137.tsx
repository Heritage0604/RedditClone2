import { Post, postState } from '@/atoms/PostAtom'
import { User } from 'firebase/auth'
import React,{useEffect,useState} from 'react'
import {
  Flex,
  Icon,
  Image,
  Skeleton,
  Spinner,
  Stack,
  Text,
  Box,
} from "@chakra-ui/react";
import CommentInput from './CommentInput';
import { useAuthState } from 'react-firebase-hooks/auth'
import { firestore,auth } from '@/firebase/ClientApp'
import { useSetRecoilState } from "recoil";
import {
  collection,
  doc,
  Timestamp,
  getDocs,
  increment,
  orderBy,
  query,
  serverTimestamp,
  where,
  writeBatch,
} from "firebase/firestore";
import { authModalState } from '@/atoms/AuthModalAtom';
import usePosts from '@/Hooks/usePosts'
import { useRouter } from "next/router";
import {
  IoArrowDownCircleOutline,
  IoArrowUpCircleOutline,
} from "react-icons/io5";
import { FaReddit } from "react-icons/fa";


export type Comment={
    id:string
    creatorId:string
    CreatorDisplayText:string
    communityId:string
    postId:string
    postTitle:string
    text:string
    createdAt:Timestamp
    creatorPhotoURL?: string
}

type Props = {
    comment:Comment
    onDeleteComment:(comment:Comment)=>void
    loadingDelete:boolean
    userId:string
}

const CommentItem:React.FC<Props> = ({comment,onDeleteComment,loadingDelete,userId}) => {
  return (
   <Flex>
      <Box>
        <Icon as ={FaReddit}
      </Box>
   </Flex>
 
  )
}

export default CommentItem