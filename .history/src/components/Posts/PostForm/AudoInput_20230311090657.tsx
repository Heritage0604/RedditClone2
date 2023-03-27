import {BsMicFill } from "react-icons/bs";
import { Stack,Input,Textarea,Button,Flex,Icon } from '@chakra-ui/react'
import React,{useState} from 'react'
import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';

type Props = {}

const AudoInput = () => {
    const [audioSrc,setAudioSrc]=useState("")
    const recorderControls = useAudioRecorder()
  const addAudioElement = (blob:any) => {
    const url = URL.createObjectURL(blob);
    setAudioSrc(url)
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    // document.body.appendChild(audio);
  };

  return (
<Flex direction="column" justify="center" align="center" width="100%">
{audioSrc ? (<>
<audio controls>
  <source src=`${audio}` type="audio/ogg">

</audio>
hey
</>):
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




