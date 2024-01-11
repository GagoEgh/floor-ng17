import { IFloorType } from "./floorType.interface";
import { Href } from "./href.interface";

export interface BaseText{
    isLoad:boolean|null,
    puyCards:string[],
    imgs:string[],
    href:Href[],
    topMenu:string[],
    floorType:IFloorType[]

}