import { Signal } from "@angular/core";
import { IParametrs } from "../types/paramters.interface";
import { ICovrolin } from "../types/covfolin.interface";

export function searchColor(ev: IParametrs, covrolins: Signal<ICovrolin[] | undefined>): ICovrolin[] {
    let color = [];
    let size = covrolins()?.length!;
    let colorSize = ev.colors!.length;

    for (let i = 0; i < size; i++) {
        for (let k = 0; k < colorSize; k++) {
            if (covrolins()![i].color.color === ev.colors[k].name) {
                color.push(covrolins()![i])
            }
        }
    }

    return color
}