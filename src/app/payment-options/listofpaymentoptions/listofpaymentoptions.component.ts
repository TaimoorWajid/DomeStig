import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listofpaymentoptions',
  templateUrl: './listofpaymentoptions.component.html',
  styleUrls: ['./listofpaymentoptions.component.css']
})
export class ListofpaymentoptionsComponent implements OnInit {

  students:any[]=[
    {No:1,Method:"Cash"},
    {No:2,Method:"Wallet"},
    {No:3,Method:"Stripe"}
  ]
  p:number=1;

  constructor() { }

  ngOnInit(): void {
  }

}
