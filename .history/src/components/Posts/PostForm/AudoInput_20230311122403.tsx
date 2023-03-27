import {BsMicFill } from "react-icons/bs";
import { Stack,Input,Textarea,Button,Flex,Icon } from '@chakra-ui/react'
import React,{useState} from 'react'
import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';

type Props = {
    audioSrc:string;
    recorderControls:object;
    addAudioElement:(blob:any) => void
    setAudioSrc:()=>void
}

const AudoInput:React.FC<Props> = ({audioSrc,recorderControls,addAudioElement,setAudioSrc}) => {



  return (
<Flex direction="column" justify="center" align="center" width="100%">
{audioSrc ? (<Flex p={20} justify="center"  direction="column" align="center" border="1px dashed gray.200" borderRadius={4} width="100%">
    <audio
        controls
        src={`${audioSrc}`}>
    </audio>
<Stack direction="row" mt={4}>
    <Button height="30px" p={"0px 20px"} >Back To Post</Button>
    <Button height="30px" p={"0px 20px"} onClick={()=>setAudioSrc(:)} variant="outline">Remove</Button>
</Stack>
</Flex>):
<Flex justify="center"  direction="column" align="center" border="1px dashed gray.200" borderRadius={4} width="100%" p={20}>
 <AudioRecorder
 
        onRecordingComplete={(blob) => addAudioElement(blob)}
        recorderControls={recorderControls}
      />
      <Button variant="ghost" mt={2} onClick={recorderControls.stopRecording}>{ recorderControls.isRecording ?"Stop recording" :"Start recording"}</Button>
</Flex>}
</Flex>
  )
}

export default AudoInput




