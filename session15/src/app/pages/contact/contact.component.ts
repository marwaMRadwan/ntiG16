import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  month : any
  months: string[] = ['jan','feb','mar','apr','may','jun', 'jul', 'aug', 'sep', 'oct','nov','dec']
  constructor() { }

  ngOnInit(): void {
  }

}
