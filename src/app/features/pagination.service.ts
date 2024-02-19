import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, debounceTime, distinctUntilChanged } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PaginationService {

    private searchSubject = new BehaviorSubject<number>(1);

    getPage(page: number) {
        this.searchSubject.next(page);
    }


    showPage(): Observable<number> {
        return this.searchSubject
            .pipe(
                distinctUntilChanged(),
                debounceTime(300),
            )
    }
}
