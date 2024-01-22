import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { tap } from "rxjs";

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

    getNews(){
        return this.http.get('assets/json/news.json')
    }
}