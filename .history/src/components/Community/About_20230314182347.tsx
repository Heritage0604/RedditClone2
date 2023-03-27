import { Community } from '@/atoms/CommunityAtom'
import { auth, firestore, storage } from '@/firebase/ClientApp'
import { Flex,Box,Text,Icon,Stack,Divider,Button, Image,Spinner } from '@chakra-ui/react'
import moment from 'moment'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React,{useRef,useState} from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import {HiOutlineDotsHorizontal} from "react-icons/hi"
import {RiCakeLine} from "react-icons/ri"
import useSelectFile from "@/Hooks/useSelectFile";
import { FaReddit } from 'react-icons/fa'
import { doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

type Props = {
    communityData:Community
}

const About:React.FC<Props> = ({communityData}) => {
   const router=useRouter()
   const [user]=useAuthState(auth)
   const selectFileRef=useRef<HTMLInput>()
   const[imageLoading,setImageLoading]=useState(false)
    const {selectedFile,
    setSelectedFile,onSelectFile}=useSelectFile()

  const onSelectImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    if (event.target.files?.[0]) {
      reader.readAsDataURL(event.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      if (readerEvent.target?.result) {
        setSelectedFile(readerEvent.target?.result as string);
      }
    };
  };


      const updateImage = async () => {
    if (!selectedFile) return;
    setImageLoading(true);
    try {
      const imageRef = ref(storage, `communities/${communityData.id}/image`);
      await uploadString(imageRef, selectedFile, "data_url");
      const downloadURL = await getDownloadURL(imageRef);
      await updateDoc(doc(firestore, "communities", communityData.id), {
        imageURL: downloadURL,
      });
      console.log("HERE IS DOWNLOAD URL", downloadURL);

      // April 24 - added state update
      setCommunityStateValue((prev) => ({
        ...prev,
        currentCommunity: {
          ...prev.currentCommunity,
          imageURL: downloadURL,
        },
      }));
    } catch (error: any) {
      console.log("updateImage error", error.message);
    }
    // April 24 - removed reload
    // window.location.reload();

    setImageLoading(false);
  };

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
<Text color="blue.500" cursor="pointer"  _hover={{textDecoration:"underline"}}
 onClick={() => selectFileRef.current?.click()}
>Change Image
</Text>
{communityData.imageURL || selectedFile ?(
    <>
    <Image src={selectedFile || communityData.imageURL} borderRadius={"full"} boxSize="40px" alt="communityImage"/>
    </>
):(
    <Icon as={FaReddit} fontSize="40px" color="brand.100"/>
)}
            </Flex>
        </Stack>
        </>
    )} 
   {selectedFile &&
                      (imageLoading ? (
                        <Spinner />
                      ) : (
                        <Text cursor="pointer" onClick={updateImage}>
                          Save Changes
                        </Text>
                      ))}
                    <input
                      id="file-upload"
                      type="file"
                      accept="image/x-png,image/gif,image/jpeg"
                      hidden
                      ref={selectFileRef}
                      onChange={onSelectImage}
                    />
</Stack>
</Flex>
 </Box>
  )
}

export default About