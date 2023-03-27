import { User } from 'firebase/auth'
import React from 'react'
import { Flex, Textarea, Button, Text } from "@chakra-ui/react";
import AuthButtons from '@/components/Navbar/RightContent/AuthButtons';

type Props = {
    commentText:string
    setCommentText:(commentText:string) => void
    user:User
    createLoading:boolean
    onCreateComment:(commentTetxt:string)=>void
}

const CommentInput:React.FC<Props> = ({commentText,setCommentText,user,createLoading,onCreateComment}) => {
  return (
   <Flex direction="column" position="relative">
      {user ? (
        <>
          <Text mb={1}>
            Comment as{" "}
            <span style={{ color: "#3182CE" }}>
              {user?.email?.split("@")[0]}
            </span>
          </Text>
        
          <Flex
            position="absolute"
            left="1px"
            right={0.1}
            bottom="1px"
            justify="flex-end"
            bg="gray.100"
            p="6px 8px"
            borderRadius="0px 0px 4px 4px"
          >
            <Button
              height="26px"
              disabled={!commentText.length}
              isLoading={createLoading}
              onClick={() => onCreateComment(commentText)}
            >
              Comment
            </Button>
          </Flex>
        </>
      ) : (
        <Flex
          align="center"
          justify="space-between"
          borderRadius={2}
          border="1px solid"
          borderColor="gray.100"
          p={4}
        >
          <Text fontWeight={600}>Log in or sign up to leave a comment</Text>
          <AuthButtons />
        </Flex>
      )}
    </Flex>
  )
}

export default CommentInput