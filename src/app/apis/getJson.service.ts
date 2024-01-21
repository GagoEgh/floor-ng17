import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { tap } from "rxjs";

@Injectable(
    { providedIn: 'root' }
)
export class GetJsonService {
    http = inject(HttpClient);

    getHref() {
        return this.http.get('assets/href.json')
    }

    getFloorType() {
        return this.http.get('assets/floorType.json')
    }

    getSaleTitleHead(){
        return this.http.get('assets/saleTitleHeader.json')
    }

    getSaleTitleFooter(){
        return this.http.get('assets/saleTitleFooter.json')
    }

}