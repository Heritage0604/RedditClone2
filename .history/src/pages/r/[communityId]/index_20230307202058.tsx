import React from 'react'

type Props = {}

const CommunityPage:React.FC<Props> = (props: Props) => {
  return (
    <div>CommunityPage</div>
  )
}

export default CommunityPage


export async function getServerSideProps() {
  return {
    props: {}, // will be passed to the page component as props
  }
}