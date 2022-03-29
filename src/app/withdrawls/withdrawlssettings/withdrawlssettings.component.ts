import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-withdrawlssettings',
  templateUrl: './withdrawlssettings.component.html',
  styleUrls: ['./withdrawlssettings.component.css']
})
export class WithdrawlssettingsComponent implements OnInit {

  Reasons:any[]=[
    {No:1,Method:"Bank Transfer",Status:"Active"},
    {No:1,Method:"Paypal",Status:"InActive"}
  ]
  p:number=1;
  term:string="";




  constructor() { }

  ngOnInit(): void {
  }

}
