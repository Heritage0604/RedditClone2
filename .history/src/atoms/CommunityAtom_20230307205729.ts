import { atom } from "recoil";

export interface Community{
    id:string;
    creatorId:string;
    numberOfMembers:number;
    privacyType:"public"|"restricted"|"private";
    created
}