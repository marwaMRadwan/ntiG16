import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-single-data',
  templateUrl: './single-data.component.html',
  styleUrls: ['./single-data.component.css']
})
export class SingleDataComponent implements OnInit {

  singleObj:any ={}
  isLoading = true
  isFailed = false
  status = 0
  constructor(private _data:DataService, private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this._data.getSingleData(this._route.snapshot.params["id"]).subscribe(
      (result) => { 
        console.log(result)
        this.singleObj=result
      },
      ()=>{
        this.status=1
        this.isFailed=true
        console.log("not found")
      },
      ()=>{
        this.status=2
        this.isLoading=false
      }
    )

  }

}
