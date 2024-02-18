import { Component, EventEmitter, Input, OnInit, Output, Signal, WritableSignal, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IPagination } from '../../types/pagination.interface';
import { ICovrolin } from '../../types/covfolin.interface';
import { BehaviorSubject, debounceTime, distinctUntilChanged } from 'rxjs';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent implements OnInit {
  pagination: WritableSignal<IPagination> = signal({
    count: [],
    page: 1,
    isVisible: true
  });
  private searchSubject = new BehaviorSubject<number>(this.pagination().page);

  ngOnInit(): void {
    this.pagination().count = new Array(this.pageLength());
    this.goToNumberPage(this.pagination().page);
    this.showPage();
  }

  @Input({ required: true }) covrolins!: Signal<ICovrolin[] | undefined>;
  @Output() covrolinsChange = new EventEmitter();
  @Output() visibleChange = new EventEmitter<boolean>();

  private pageLength(): number {
    return Math.ceil(this.covrolins()!.length / 10);
  }

  private updatePage(index: number) {
    this.pagination.update((p: IPagination) => ({ ...this.pagination(), page: index }))
  }

  goToNumberPage(index: number) {
    this.updatePage(index)
    let size = index * 10;
    let start = size - 10;
    let vewCovrolins = computed(() => this.covrolins()?.slice(start, size));
    this.covrolinsChange.emit(vewCovrolins)
  }

  previous() {
    this.pagination().page--;
    if (this.pagination().page === 0) {
      this.pagination().page = this.pageLength()
    }

    this.goToNumberPage(this.pagination().page)

  }

  next() {
    this.pagination().page++;
    if (this.pagination().page > this.pageLength()) {
      this.pagination().page = 1;
    }
    this.goToNumberPage(this.pagination().page)
  }

  getPage() {
    this.searchSubject.next(this.pagination().page)
  }

  private showPage() {
    this.searchSubject
      .pipe(
        distinctUntilChanged(),
        debounceTime(300),
      )
      .subscribe((res: number) => {
        this.isValidPage(res) ? this.updateIsVisible(false) :
          (this.goToNumberPage(res), this.updateIsVisible(true));
        this.visibleChange.emit(this.pagination().isVisible)

      })
  }

  private updateIsVisible(bol: boolean) {
    this.pagination.update((p: IPagination) => ({ ...this.pagination(), isVisible: bol }))
  }

  private isValidPage(value: number) {
    return value > this.pagination().count.length || value === 0 || value === null
  }

}
