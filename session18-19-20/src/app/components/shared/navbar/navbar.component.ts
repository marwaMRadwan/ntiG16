import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/providers/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public _user:UserService, private _router:Router) { }

  ngOnInit(): void {
  }
  logMeOut(){
    this._user.logout().subscribe(
      (res)=> console.log(res),
      ()=>{},
      ()=>{
        localStorage.removeItem("appToken")
        this._user.isLoggedIn=false
        this._user.userData={name:""}
        this._router.navigateByUrl("/")
      }
    )
  }

}
