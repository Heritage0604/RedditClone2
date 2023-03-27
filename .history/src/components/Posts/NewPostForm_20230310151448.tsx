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
import { useRecoilState, useSetRecoilState } from "recoil";
// import { firestore, storage } from "../../../firebase/clientApp";
// import TabItem from "./TabItem";
// import { postState } from "../../../atoms/postsAtom";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import TabItem from "./TabItem";
import TextInput from "./PostForm/TextInput";
import ImageUpload from "./PostForm/ImageUpload";
import { Post } from "@/atoms/PostAtom";
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
   user?:User|null
}

const NewPostForm:React.FC<Props> = ({user}) => {
  const router=use
  const[selectedTab,setSelectedTab]=useState(formTabs[0].title)
  const[textInputs,setTextInputs]=useState({
    title:"",
    body:"",
  })
  const [selectedFile,setSelectedFile]=useState<string>("")

const handleCreatePost =async()=>{
  const newPost:Post={}
  // constrttust new post object and make type post
  // store post in post database
  // check if user added image in post collection
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
    loading={false}/>)}

   {selectedTab=== formTabs[1].title  && <ImageUpload selectedFile={selectedFile} 
   onSelectImage={onSelectImage} setSelectedTab={setSelectedTab} setSelectedFile={setSelectedFile}/>}
</Flex>
   </Flex>
  )
}

export default NewPostForm