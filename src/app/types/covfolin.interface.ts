export interface ICovrolin{
    id:number,
    brand: string,
    sum:string,
    color: ColorInterface,
    country: CountryInterface,
    collection: string,
    coatingType: string,
    roomType: string[],
    drawingType: string,
    applications: number,
    packagingType: string,
    ServiceLife: string,
    formSale: string,
    unitMeasurement: string,
    hegiht: string,
    width: string,
    pileType: string,
    totalWeight: string,
    rollWeight: string,
    base: string,
    pileHeight: number,
    pileComposition: string,
    img:string,
}

interface ColorInterface{
    img: string,
    color: string,
}

interface CountryInterface{
    flag: string,
    country: string
}