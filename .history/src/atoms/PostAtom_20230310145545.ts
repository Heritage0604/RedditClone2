import { atom } from "recoil";

export type Post={
    id:string
    community:string
    creatorId:string
    creatorDisplayName:string
    body
}