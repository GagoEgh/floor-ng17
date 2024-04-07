import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Output,
  Signal,
  inject,
  signal,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormsModule,
  Validators,
  ReactiveFormsModule,
  FormControl
} from '@angular/forms';
import { IRooms } from '../../../types/rooms.interface';
import { MenuService } from '../../../apis/menu.service';
import { ICovrolinColors } from '../../../types/covrolinColor.interface';
import { IParametrs } from '../../../types/paramters.interface';




@Component({
  selector: 'app-covrolin-parametr',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './covrolin-parametr.component.html',
  styleUrl: './covrolin-parametr.component.scss'
})
export class CovrolinParametrComponent {
  menuService = inject(MenuService);
  parametrs!: FormGroup;
  fb = inject(FormBuilder);
  typeOfRoom!: Signal<IRooms[] | undefined>;
  covrolinColors!: Signal<ICovrolinColors[] | undefined>;
  covrolinParameters!: IParametrs;

  constructor() {
    this.menuService.roomsDispatch();
    this.typeOfRoom = this.menuService.getTypeOfRoomsSignal();
    this.menuService.covrolinColorsDispatch();
    this.covrolinColors = this.menuService.covrolinColorSignal();

  }


  @Output() parametrsEvent: EventEmitter<IParametrs> = new EventEmitter();
  @Output()changeEvent:EventEmitter<boolean> = new EventEmitter()

  ngOnInit(): void {
    this.initForm();
    this.addParametrs();
    this.roomsValueChange();
    this.roomValueChange();
    this.addColors();

  }

  initForm() {
    this.parametrs = this.fb.group({
      rangeMin: ['400',],
      rangeMax: ['80000',],
      rooms: new FormArray([
        new FormControl(false)
      ]),
      colors: new FormArray([
        new FormControl(false,)
      ])
    })
  }

  private roomsValueChange(): void {
    (this.parametrs.get('rooms') as FormArray).controls[0].valueChanges
      .subscribe({
        next: (res: any) => {
          (this.parametrs.get('rooms') as FormArray)
            .controls.forEach((item, index) => {
              if (index > 0) item.setValue(res)
            })

        }
      })
  }

  private roomValueChange(): void {
    (this.parametrs.get('rooms') as FormArray).controls.forEach((item, index) => {
      item.valueChanges.subscribe({
        next: (res: boolean) => {
          let t = JSON.parse(JSON.stringify(this.typeOfRoom()))
          t![index].isChecked = res;
          this.typeOfRoom = signal(t);
        }
      })
    });
  }

  getRoomsControls(): FormArray {
    return this.parametrs.controls["rooms"] as FormArray;
  }

  addParametrs() {
    for (let i = 0; i < this.typeOfRoom()!.length - 1; i++) {
      (<FormArray>this.parametrs.controls["rooms"]).push(new FormControl(false, Validators.required));
    }
  }

  getColorsControls(): FormArray {
    return this.parametrs.controls["colors"] as FormArray
  }

  addColors() {
    for (let i = 0; i < this.covrolinColors()!.length - 1; i++) {
      (<FormArray>this.parametrs.controls["colors"]).push(new FormControl(false));
    }

  }

  checked(index: number) {
    (this.parametrs.get('colors') as FormArray)!.controls.forEach(item => {
      item.valueChanges.subscribe({
        next: (res) => {
          let c = JSON.parse(JSON.stringify(this.covrolinColors()));
          c[index]!.isChecked! = res;
          this.covrolinColors = signal(c);
        }
      })
    })
  }

  submit() {
    let range = [this.parametrs.controls['rangeMin'].value, this.parametrs.controls['rangeMax'].value];
    let covrolinColors = this.covrolinColors()!.filter(item => item.isChecked);
    let rooms = this.typeOfRoom()!.filter(item => item.isChecked);

    this.covrolinParameters = {
      range,
      colors: covrolinColors,
      rooms
    }

    this.parametrsEvent.emit(this.covrolinParameters)
  }


  cansel() {
    this.parametrs.reset();
    this.parametrs.get('rangeMin')?.setValue('400');
    this.parametrs.get('rangeMax')?.setValue('80000');

    this.changeEvent.emit(true)
  }
}




