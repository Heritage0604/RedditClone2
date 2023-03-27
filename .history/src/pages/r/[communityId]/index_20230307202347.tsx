import { firestore } from '@/firebase/ClientApp'
import { doc } from 'firebase/firestore'
import { GetServerSidePropsContext } from 'next'
import React from 'react'

type Props = {}

const CommunityPage:React.FC<Props> = (props: Props) => {
  return (
    <div>CommunityPage</div>
  )
}

export default CommunityPage


export async function getServerSideProps(context:GetServerSidePropsContext) {
//  get community data
    try{
    const  communityRef=doc(firestore,"communities",context.query.communityId as string)
 }catch(error){

 }
}