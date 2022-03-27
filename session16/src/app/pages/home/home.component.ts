import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  msg : string = ""
  resFlag:boolean = false
  constructor() { }

  ngOnInit(): void {
  }
  handleForm(myForm:NgForm){
    if(myForm.valid){
      console.log(myForm.value)
      this.msg="data added"
      this.resFlag =true
    }
    else{
      this.msg = "check your inputs"
    }
  }

}
