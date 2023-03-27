import PageContent from '@/components/layout/PageContent'
import React,{useEffect} from 'react'

type Props = {}

const index:React.FC<Props> = (props: Props) => {
  const [user,loadingUser]=useAut
  const buildUserHomeFeed=()=>{}
  const buildNoUserHomeFeed=()=>{}
  return (
 <PageContent>
<>Hello</>
<>How are you</>
 </PageContent>
  )
}

export default index