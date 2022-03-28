import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  user : User|null = null
  constructor(private _user:UserService, private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this._user.getSingleUser(this._route.snapshot.params['id']).subscribe(
      (res)=> this.user= res
    )
  }

}
