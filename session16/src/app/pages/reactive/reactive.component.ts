import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  isSubmitted=false
  myReactiveForm: FormGroup = new FormGroup({
    name:new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
    age:new FormControl("", [Validators.required,Validators.min(21)]),
    email:new FormControl("", [Validators.required, Validators.email])
  })
  get name(){ return this.myReactiveForm.get("name")}
  get age(){ return this.myReactiveForm.get("age")}
  get email(){ return this.myReactiveForm.get("mail")}

  constructor() { }

  ngOnInit(): void {
  }
  reactiveHandle(){
    this.isSubmitted=true
    console.log(this.myReactiveForm.value)
  }
}
