import { GetServerSidePropsContext } from 'next'
import React from 'react'

type Props = {}

const CommunityPage:React.FC<Props> = (props: Props) => {
  return (
    <div>CommunityPage</div>
  )
}

export default CommunityPage


export async function getServerSideProps(contxt:GetServerSidePropsContext) {
 
}