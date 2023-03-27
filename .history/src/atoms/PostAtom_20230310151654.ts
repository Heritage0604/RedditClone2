import { Timestamp } from "firebase/firestore";
import { atom } from "recoil";

export type Post={
    cid:string
    community:string
    creatorId:string
    creatorDisplayName:string
    title:string
    body:string
    numberOfComents:number
    voteStatus:number
    imageURL?:string
    CommunityImageURL?:string
    createdAt:Timestamp
}
interface PostState{
    selectedPost:Post|null
    post:Post[]
    // postVote
}
const defaultPostState:PostState={
    selectedPost:null,
    post:[],
}
export const postState= atom<PostState>({
    key:"postState",
    default:defaultPostState
})