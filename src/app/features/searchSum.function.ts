import { Signal } from "@angular/core"
import { IParametrs } from "../types/paramters.interface"
import { ICovrolin } from "../types/covfolin.interface"

export function searchSum(ev: IParametrs, covrolins: Signal<ICovrolin[] | undefined>): ICovrolin[] | undefined {
    return covrolins()?.filter((item: ICovrolin) => {
        return (item.sum > ev.range[0] && item.sum < ev.range[1])
    })
}