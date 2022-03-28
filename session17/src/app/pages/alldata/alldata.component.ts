import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-alldata',
  templateUrl: './alldata.component.html',
  styleUrls: ['./alldata.component.css']
})
export class AlldataComponent implements OnInit {

  constructor(private _data:DataService) { }

  ngOnInit(): void {
    this._data.getData().subscribe(result=>{
      console.log(result)
    })
  }

}
