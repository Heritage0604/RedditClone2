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
  Avatar,
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
      <Box mr={2}>
        <Icon as={FaReddit} fontSize={30} color="gray.300" />
      </Box>
      <Stack spacing={1}>
        <Stack direction="row" align="center" spacing={2} fontSize="8pt">
          <Text
            fontWeight={700}
            _hover={{ textDecoration: "underline", cursor: "pointer" }}
          >
            {comment.creatorDisplayText}
          </Text>
          {comment.createdAt?.seconds && (
            <Text color="gray.600">
              {moment(new Date(comment.createdAt?.seconds * 1000)).fromNow()}
            </Text>
          )}
          {isLoading && <Spinner size="sm" />}
        </Stack>
        <Text fontSize="10pt">{comment.text}</Text>
        <Stack
          direction="row"
          align="center"
          cursor="pointer"
          fontWeight={600}
          color="gray.500"
        >
          <Icon as={IoArrowUpCircleOutline} />
          <Icon as={IoArrowDownCircleOutline} />
          {userId === comment.creatorId && (
            <>
              <Text fontSize="9pt" _hover={{ color: "blue.500" }}>
                Edit
              </Text>
              <Text
                fontSize="9pt"
                _hover={{ color: "blue.500" }}
                onClick={() => onDeleteComment(comment)}
              >
                Delete
              </Text>
            </>
          )}
        </Stack>
      </Stack>
    </Flex>
 
  )
}

export default CommentItem