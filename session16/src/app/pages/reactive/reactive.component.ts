import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  myReactiveForm: FormGroup = new FormGroup({
    name:new FormControl(),
    age:new FormControl(),
    email:new FormControl()
  })

  constructor() { }

  ngOnInit(): void {
  }
  reactiveHandle(){
    console.log(this.myReactiveForm.value)
  }
}
