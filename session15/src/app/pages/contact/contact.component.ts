import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  // month : any
  // months: string[] = ['jan','feb','mar','apr','may','jun', 'jul', 'aug', 'sep', 'oct','nov','dec']
  // s:string[]=['rat', 'ox', 'tiger', 'rabbit', 'dragon', 'snake', 'horse', 'ram', 'monkey', 'rooster','dog', 'pig']
  d :Date = new Date()
  name="MaRwA"
  x:number= 5.125844521515
  user = {name:"marwa", age:36, job:"developer"}
  constructor() { }

  ngOnInit(): void {
  }
  // changeVal(event:any){
  //   this.month = event.target.value
  // }
}
