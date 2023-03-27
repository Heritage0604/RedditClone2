import { Community } from '@/atoms/CommunityAtom'
import { firestore } from '@/firebase/ClientApp'
import { doc, getDoc } from 'firebase/firestore'
import { GetServerSidePropsContext } from 'next'
import React from 'react'
import safeJsonStringify from "safe-json-stringify"

type Props = {
    communityData:Community
}

const CommunityPage:React.FC<Props> = ({communityData}) => {
    console.log(communityData)
    if(!communityData ){

        return (
            <div>Community Does not exist</div>
            )
        }
        return(
            <div> WELCOME TO {communityData?.id}</div>
        )
}

export default CommunityPage


export async function getServerSideProps(context:GetServerSidePropsContext) {
//  get community data
    try{
    const  communityRef=doc(firestore,"communities",context.query.communityId as string)
    const communityDoc=await getDoc(communityRef)
 
  return {
    props: {
        communityData: JSON.parse(safeJsonStringify({id:communityDoc.id,...communityDoc.data()}))
    }, // will be passed to the page component as props
  }

 }catch(error){
console.log(error)
 }
}