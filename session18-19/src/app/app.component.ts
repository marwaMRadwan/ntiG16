import { Component } from '@angular/core';
import { UserService } from './providers/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _user:UserService){
    this._user.me().subscribe(
      res=>{
        this._user.userData= res.data
      },
      (e)=>{
      },
      ()=>{
        this._user.isLoggedIn=true
      }
    )
  }
}
