import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, tap } from "rxjs";
import { INews } from "../types/news.interface";

@Injectable(
    { providedIn: 'root' }
)
export class GetJsonService {
    http = inject(HttpClient);

    getHref() {
        return this.http.get('assets/json/href.json')
    }

    getFloorType() {
        return this.http.get('assets/json/floorType.json')
    }

    getSaleTitleHead(){
        return this.http.get('assets/json/saleTitleHeader.json')
    }

    getSaleTitleFooter(){
        return this.http.get('assets/json/saleTitleFooter.json')
    }

    getNews():Observable<INews[]>{
        return this.http.get<INews[]>('assets/json/news.json')
    }
}