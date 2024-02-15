import { Component, EventEmitter, Input, OnInit, Output, Signal, WritableSignal, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IPagination } from '../../types/pagination.interface';
import { ICovrolin } from '../../types/covfolin.interface';


@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent implements OnInit {

  pagination: WritableSignal<IPagination> = signal({
    count: [],
    page: 0
  })

  ngOnInit(): void {
    this.pagination().count = new Array(this.pageLength());
    console.log(this.pagination().count)
    this.goToNumberPage(1);
  }

  @Input({ required: true }) covrolins!: Signal<ICovrolin[] | undefined>;
  @Output() covrolinsChange = new EventEmitter()

  private pageLength(): number {
    return Math.ceil(this.covrolins()!.length / 10);
  }

  private updatePage(index: number) {
    this.pagination.set({ ...this.pagination(), page: index })
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
    if(this.pagination().page ===0){
      this.pagination().page = this.pageLength()
    }

    this.goToNumberPage(this.pagination().page)

  }

  next() {
    this.pagination().page++;
    if(this.pagination().page>this.pageLength()){
      this.pagination().page =1;
    }
    this.goToNumberPage(this.pagination().page)

  }

}
