import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Icon,
  Input,
  Stack,
  Textarea,
  Image,
} from "@chakra-ui/react";
import { User } from "firebase/auth";
import {
  Timestamp,
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { useRouter } from "next/router";

import { BiPoll } from "react-icons/bi";
import { BsLink45Deg, BsMic } from "react-icons/bs";
import { IoDocumentText, IoImageOutline } from "react-icons/io5";
import { AiFillCloseCircle } from "react-icons/ai";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'

import { useRecoilState, useSetRecoilState } from "recoil";
// import { firestore, storage } from "../../../firebase/clientApp";
// import TabItem from "./TabItem";
// import { postState } from "../../../atoms/postsAtom";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import TabItem from "./TabItem";
import TextInput from "./PostForm/TextInput";
import ImageUpload from "./PostForm/ImageUpload";
import { Post } from "@/atoms/PostAtom";
import { firestore,storage } from "@/firebase/ClientApp";
import LinkInput from "./PostForm/LinkInput";
import PollForm from "./PostForm/PollForm";
// import TextInputs from "./TextInputs";
// import ImageUpload from "./ImageUpload";

const formTabs :Tabitem[] = [
  {
    title: "Post",
    icon: IoDocumentText,
  },
  {
    title: "Images & Video",
    icon: IoImageOutline,
  },
  {
    title: "Link",
    icon: BsLink45Deg,
  },
  {
    title: "Poll",
    icon: BiPoll,
  },
  {
    title: "Talk",
    icon: BsMic,
  },
];

export type Tabitem={
  title:string,
  icon:typeof Icon.arguments
}
type Props={
   user:User
}

const NewPostForm:React.FC<Props> = ({user}) => {
  const Data=["Option","Option","Option","Option"]
  const router=useRouter()
  const[loading,setLoading]=useState(false)
  const[error,setError]=useState(false)
  const [addOptions,setAddOptions]=useState([])
  const[selectedTab,setSelectedTab]=useState(formTabs[0].title)
  const[textInputs,setTextInputs]=useState({
    title:"",
    body:"",
  })
  const[linkInputs,setLinkInputs]=useState({
    title:"",
    body:"",
  })
  const [selectedFile,setSelectedFile]=useState<string>("")
    const AddInput=()=>{
        if(addOptions.length >=0){
            const length=addOptions.length
setAddOptions((arr)=>[...arr,Data[length]])
return
}
        
return

}

const DeleteInput=()=>{
        const items = addOptions;
      if (items.length > 0) {
          const lastIndex = items.length - 1;
          setAddOptions(items.filter((item, index) => index !== lastIndex));
      }
}

const handleCreatePost =async()=>{
  const{communityId}=router.query
  const newPost:Post={
    communityId:communityId as string,
    creatorId:user?.uid,
    creatorDisplayName:user.email!.split("@")[0],
    title:textInputs.title,
    body:textInputs.body,
    numberOfComments:0,
     voteStatus:0,
     createdAt:serverTimestamp()  as Timestamp,
      linktitle:linkInputs?.title ? linkInputs.title :"",
      link:linkInputs?.body ? linkInputs.body :"",
  }
  setLoading(true)
  try{
const postDocRef=await addDoc(collection(firestore,"posts"),newPost)
// constrttust new post object and make type post
// store post in post database

// check if user added image in post collection
if(selectedFile){
  const imageRef=ref(storage,`posts/${postDocRef.id}/image`)
  await uploadString(imageRef,selectedFile,`data_url`)
  const downloadUrl= await getDownloadURL(imageRef)
  console.log("this is the download url",downloadUrl)
  await updateDoc(postDocRef,{
    imageURL:downloadUrl
  })
}

  }catch(error:any){
    setError(true)
    console.log("handle create post error",error)
  }
  setLoading(false)
   router.back()
};
const onSelectImage=(event:React.ChangeEvent<HTMLInputElement>)=>{
  const reader= new FileReader()
if(  event.target.files?.[0]){
  reader.readAsDataURL( event.target.files[0])
}
 reader.onload=(readerEvent)=>{
  if (readerEvent.target?.result){
setSelectedFile(readerEvent.target.result as string)
  }
 }
}

const onTextChange=(event:React.ChangeEvent<HTMLInputElement| HTMLTextAreaElement>)=>{
  const {target:{name,value},} = event
  setTextInputs((prev)=>({...prev,[name]:value}))
}
const onLinkChange=(event:React.ChangeEvent<HTMLInputElement| HTMLTextAreaElement>)=>{
  const {target:{name,value},} = event
  setLinkInputs((prev)=>({...prev,[name]:value}))
}


  return (
   <Flex direction="column" bg="white" borderRadius={4} mt={2}>
<Flex width="100%">
{formTabs.map((item)=>{
  return(
< TabItem key={item.title} item={item} selected={item.title===selectedTab} setSelectedTab={setSelectedTab}/>
  )
})}
</Flex>
<Flex p={'5px'}>

  {selectedTab=== formTabs[0].title  && (<TextInput textInputs={textInputs}
   handleCreatePost={handleCreatePost}
    onChange={onTextChange}
    loading={loading}/>)}
  {selectedTab=== formTabs[3].title  && (<PollForm addOptions={addOptions} DeleteInput={DeleteInput} AddInput={AddInput}/>)}

  {selectedTab=== formTabs[2].title  && (<LinkInput  linkInputs={linkInputs}
   
    onChange={onLinkChange}
    />)}

   {selectedTab=== formTabs[1].title  && <ImageUpload selectedFile={selectedFile} 
   onSelectImage={onSelectImage} setSelectedTab={setSelectedTab} setSelectedFile={setSelectedFile}/>}
</Flex>
{error && (
  <Alert status='error'>
  <AlertIcon />
  <AlertTitle>Post Error!</AlertTitle>
  <AlertDescription>Couldn't Upload Post</AlertDescription>
</Alert>
)}
   </Flex>
  )
}

export default NewPostForm