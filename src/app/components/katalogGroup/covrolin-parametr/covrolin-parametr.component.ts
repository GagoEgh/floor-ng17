import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormsModule,
  ReactiveFormsModule,
  Validators,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-covrolin-parametr',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './covrolin-parametr.component.html',
  styleUrl: './covrolin-parametr.component.scss'
})
export class CovrolinParametrComponent implements OnInit {
  parametrs!: FormGroup;
  sum = '555';
  typeOfRoom = [
    'Выставки',
    'Гостиницы',
    'Домой',
    'Кинотеатры и театры',
    'Образовательные, медицинские учреждения',
    'Офисы',
    'Рестораны, клубы',
    'Спортивные учреждения',
    'Торговые центры'
  ];

  // colors = [
  //   '#000000', '#979797', '#D0D0D0', '#FFFFFF', '#EEE0B7', '#FFACC8', '#FE1111',
  //   '#FE6F5F', '#C45824', '#964B00', '#B00000', '#FF6800', '#E83A08', '#F5FA15',
  //   '#FFD700', '#32AC35', '#61F42E', '#15D0FA', '#332FF9', '#16228F', '#A008E8',
  //   '#D948F0', '#EA338B', '#30D5C8'
  // ];

  colors = [
    {
      color: '#000000',
      isChecked: false
    },
    {
      color: '#979797',
      isChecked: false
    },
    {
      color: '#D0D0D0',
      isChecked: false
    },
    {
      color: '#FFFFFF',
      isChecked: false
    },
    {
      color: '#EEE0B7',
      isChecked: false
    },
    {
      color: '#FFACC8',
      isChecked: false
    }, {
      color: '#FE1111',
      isChecked: false
    },
    {
      color: '#FE6F5F',
      isChecked: false
    },
    {
      color: '#C45824',
      isChecked: false
    },
    {
      color: '#964B00',
      isChecked: false
    },
    {
      color: '#B00000',
      isChecked: false
    },
    {
      color: '#FF6800',
      isChecked: false
    },
    {
      color: '#E83A08',
      isChecked: false
    },
    {
      color: '#F5FA15',
      isChecked: false
    },
    {
      color: '#FFD700',
      isChecked: false
    },
    {
      color: '#32AC35',
      isChecked: false
    },
    {
      color: '#61F42E',
      isChecked: false
    },
    {
      color: '#15D0FA',
      isChecked: false
    },
    {
      color: '#332FF9',
      isChecked: false
    },
    {
      color: '#16228F',
      isChecked: false
    },
    {
      color: '#A008E8',
      isChecked: false
    },
    {
      color: '#D948F0',
      isChecked: false
    },
    {
      color: '#EA338B',
      isChecked: false
    },
    {
      color: '#30D5C8',
      isChecked: false
    },


  ]
  fb = inject(FormBuilder);
  constructor() {
    this.initForm()
  }
  ngOnInit(): void {
    this.addParametrs();
    this.addColors()
  }


  initForm() {

    this.parametrs = this.fb.group({
      rangeMin: ['400', [Validators.required]],
      rangeMax: ['5000', [Validators.required]],
      rooms: new FormArray([
        new FormControl(false, Validators.required)
      ]),
      colors: new FormArray([
        new FormControl(false,)
      ])
    })
  }



  getColorsControls(): FormArray {
    return this.parametrs.controls["colors"] as FormArray
  }

  addColors() {
    this.colors.forEach((item) => {
      (<FormArray>this.parametrs.controls["colors"]).push(new FormControl(false));
    })
  }

  getRoomsControls(): FormArray {
    return this.parametrs.controls["rooms"] as FormArray;
  }

  addParametrs() {
    for (let i = 0; i < this.typeOfRoom.length; i++) {
      (<FormArray>this.parametrs.controls["rooms"]).push(new FormControl(false, Validators.required));
    }
  }

  checked(index: number) {
    (this.parametrs.get('colors') as FormArray).controls.forEach(item => {
      item.valueChanges.subscribe({
        next: (res) => {
          this.colors[index].isChecked = res;
        }
      })
    })

  }

  submit() {

    console.log(this.parametrs.controls["colors"])
  }


}
