import { IFloorType } from "./floorType.interface";
import { Href } from "./href.interface";
import { INews } from "./news.interface";
import { ISaleTitle } from "./saleTitle.interface";

export interface BaseText{
    isLoad:boolean|null,
    puyCards:string[],
    imgs:string[],
    href:Href[],
    topMenu:string[],
    floorType:IFloorType[],
    saleTitleHead:ISaleTitle[],
    saleTitleFooter:ISaleTitle[],
    news:INews[]

}