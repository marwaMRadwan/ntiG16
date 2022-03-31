import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/providers/services/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  data:any[] = []
  constructor(private _user:UserService, private _router:Router) { }

  ngOnInit(): void {
    this._user.allUsers().subscribe(
      data=> this.data=data.data,
      (e)=> this._router.navigateByUrl("/")
    )
  }
handleDelete(userId:string, index:number){
  
  this._user.delUser(userId).subscribe(
    (res)=>{console.log(res)},
    ()=>{},
    ()=>{this.data.splice(index, 1)}
  )
}

}
