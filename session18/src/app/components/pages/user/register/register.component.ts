import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/providers/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userData = {
    name:"marwa",
    age:null,
    phone:"",
    email:"",
    gender:null,
    password:""
  }
  phoneSpcialError = ""
  constructor(private _user:UserService) { }

  ngOnInit(): void {
  }

  rigsterUser(register:NgForm){
    // console.log(register.value)
    let pStatus = this.checkPhone(this.userData.phone)
    if(register.valid && pStatus){
      
      console.log(register.value)
      // this._user.registerUser(register.value).subscribe(
      //   data=> console.log(data)
      // )
    }
  }
checkPhone(pNum:string):boolean{
  if((pNum.startsWith('010')||pNum.startsWith('012')||pNum.startsWith('011')||pNum.startsWith('015'))&& pNum.length==11) {
    this.phoneSpcialError=""
    return true
  }
  else{
    if(pNum.length!=11) this.phoneSpcialError= "invalid phone must be 11 numbers"
    else  this.phoneSpcialError= "invalid phone format"
    return false
  }
}
}
