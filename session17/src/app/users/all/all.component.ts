import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  allData: User[] = []
  constructor(private _user:UserService) { }

  ngOnInit(): void {
    this._user.getAllUsers().subscribe(
      res=> this.allData= res,
      (e)=> console.log(e.message),
      ()=>{console.log("all data featched")}
    )
  }

}
