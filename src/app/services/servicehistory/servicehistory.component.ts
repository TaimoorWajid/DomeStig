import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicehistory',
  templateUrl: './servicehistory.component.html',
  styleUrls: ['./servicehistory.component.css']
})
export class ServicehistoryComponent implements OnInit {

  term:string="";
  p:number=1;

  Services:any[]=[
    {BookingId:'#2342',CustomerName:"Naiful Islam",WorkerName:"Naiful Islam",Workinghours:"2 hours 20 minutes",Paid:"$150",Serviceaddress:"Address will be here",Status:"Scheduled"},
    {BookingId:'#2342',CustomerName:"Naiful Islam",WorkerName:"Naiful Islam",Workinghours:"2 hours 20 minutes",Paid:"$150",Serviceaddress:"Address will be here",Status:"Scheduled"},
    {BookingId:'#2342',CustomerName:"Naiful Islam",WorkerName:"Naiful Islam",Workinghours:"2 hours 20 minutes",Paid:"$150",Serviceaddress:"Address will be here",Status:"Scheduled"},
    {BookingId:'#2342',CustomerName:"Naiful Islam",WorkerName:"Naiful Islam",Workinghours:"2 hours 20 minutes",Paid:"$150",Serviceaddress:"Address will be here",Status:"Scheduled"},
    {BookingId:'#2342',CustomerName:"Naiful Islam",WorkerName:"Naiful Islam",Workinghours:"2 hours 20 minutes",Paid:"$150",Serviceaddress:"Address will be here",Status:"Scheduled"},
    {BookingId:'#2342',CustomerName:"Naiful Islam",WorkerName:"Naiful Islam",Workinghours:"2 hours 20 minutes",Paid:"$150",Serviceaddress:"Address will be here",Status:"Scheduled"},
    {BookingId:'#2342',CustomerName:"Naiful Islam",WorkerName:"Naiful Islam",Workinghours:"2 hours 20 minutes",Paid:"$150",Serviceaddress:"Address will be here",Status:"Scheduled"},
    {BookingId:'#2342',CustomerName:"Naiful Islam",WorkerName:"Naiful Islam",Workinghours:"2 hours 20 minutes",Paid:"$150",Serviceaddress:"Address will be here",Status:"Scheduled"},
    {BookingId:'#2342',CustomerName:"Naiful Islam",WorkerName:"Naiful Islam",Workinghours:"2 hours 20 minutes",Paid:"$150",Serviceaddress:"Address will be here",Status:"Scheduled"},
    {BookingId:'#2342',CustomerName:"Naiful Islam",WorkerName:"Naiful Islam",Workinghours:"2 hours 20 minutes",Paid:"$150",Serviceaddress:"Address will be here",Status:"Scheduled"},
    {BookingId:'#2342',CustomerName:"Naiful Islam",WorkerName:"Naiful Islam",Workinghours:"2 hours 20 minutes",Paid:"$150",Serviceaddress:"Address will be here",Status:"Scheduled"},
    {BookingId:'#2342',CustomerName:"Naiful Islam",WorkerName:"Naiful Islam",Workinghours:"2 hours 20 minutes",Paid:"$150",Serviceaddress:"Address will be here",Status:"Scheduled"},
    {BookingId:'#2342',CustomerName:"Naiful Islam",WorkerName:"Naiful Islam",Workinghours:"2 hours 20 minutes",Paid:"$150",Serviceaddress:"Address will be here",Status:"Scheduled"},
    {BookingId:'#2342',CustomerName:"Naiful Islam",WorkerName:"Naiful Islam",Workinghours:"2 hours 20 minutes",Paid:"$150",Serviceaddress:"Address will be here",Status:"Scheduled"},
    {BookingId:'#2342',CustomerName:"Naiful Islam",WorkerName:"Naiful Islam",Workinghours:"2 hours 20 minutes",Paid:"$150",Serviceaddress:"Address will be here",Status:"Scheduled"},
    {BookingId:'#2342',CustomerName:"Naiful Islam",WorkerName:"Naiful Islam",Workinghours:"2 hours 20 minutes",Paid:"$150",Serviceaddress:"Address will be here",Status:"Scheduled"},
    {BookingId:'#2342',CustomerName:"Naiful Islam",WorkerName:"Naiful Islam",Workinghours:"2 hours 20 minutes",Paid:"$150",Serviceaddress:"Address will be here",Status:"Scheduled"},
    {BookingId:'#2342',CustomerName:"Naiful Islam",WorkerName:"Naiful Islam",Workinghours:"2 hours 20 minutes",Paid:"$150",Serviceaddress:"Address will be here",Status:"Scheduled"},
    {BookingId:'#2342',CustomerName:"Naiful Islam",WorkerName:"Naiful Islam",Workinghours:"2 hours 20 minutes",Paid:"$150",Serviceaddress:"Address will be here",Status:"Scheduled"},
    {BookingId:'#2342',CustomerName:"Naiful Islam",WorkerName:"Naiful Islam",Workinghours:"2 hours 20 minutes",Paid:"$150",Serviceaddress:"Address will be here",Status:"Scheduled"},
    {BookingId:'#2342',CustomerName:"Naiful Islam",WorkerName:"Naiful Islam",Workinghours:"2 hours 20 minutes",Paid:"$150",Serviceaddress:"Address will be here",Status:"Scheduled"},
    {BookingId:'#2342',CustomerName:"Naiful Islam",WorkerName:"Naiful Islam",Workinghours:"2 hours 20 minutes",Paid:"$150",Serviceaddress:"Address will be here",Status:"Scheduled"},
    {BookingId:'#2342',CustomerName:"Naiful Islam",WorkerName:"Naiful Islam",Workinghours:"2 hours 20 minutes",Paid:"$150",Serviceaddress:"Address will be here",Status:"Scheduled"},
    {BookingId:'#2342',CustomerName:"Naiful Islam",WorkerName:"Naiful Islam",Workinghours:"2 hours 20 minutes",Paid:"$150",Serviceaddress:"Address will be here",Status:"Scheduled"},
    {BookingId:'#2342',CustomerName:"Naiful Islam",WorkerName:"Naiful Islam",Workinghours:"2 hours 20 minutes",Paid:"$150",Serviceaddress:"Address will be here",Status:"Scheduled"},
    {BookingId:'#2342',CustomerName:"Naiful Islam",WorkerName:"Naiful Islam",Workinghours:"2 hours 20 minutes",Paid:"$150",Serviceaddress:"Address will be here",Status:"Scheduled"},
    {BookingId:'#2342',CustomerName:"Naiful Islam",WorkerName:"Naiful Islam",Workinghours:"2 hours 20 minutes",Paid:"$150",Serviceaddress:"Address will be here",Status:"Scheduled"},
    {BookingId:'#2342',CustomerName:"Naiful Islam",WorkerName:"Naiful Islam",Workinghours:"2 hours 20 minutes",Paid:"$150",Serviceaddress:"Address will be here",Status:"Scheduled"},
    {BookingId:'#2342',CustomerName:"Naiful Islam",WorkerName:"Naiful Islam",Workinghours:"2 hours 20 minutes",Paid:"$150",Serviceaddress:"Address will be here",Status:"Scheduled"},
    {BookingId:'#2342',CustomerName:"Naiful Islam",WorkerName:"Naiful Islam",Workinghours:"2 hours 20 minutes",Paid:"$150",Serviceaddress:"Address will be here",Status:"Scheduled"},
    {BookingId:'#2342',CustomerName:"Naiful Islam",WorkerName:"Naiful Islam",Workinghours:"2 hours 20 minutes",Paid:"$150",Serviceaddress:"Address will be here",Status:"Scheduled"},
    {BookingId:'#2342',CustomerName:"Naiful Islam",WorkerName:"Naiful Islam",Workinghours:"2 hours 20 minutes",Paid:"$150",Serviceaddress:"Address will be here",Status:"Scheduled"},{BookingId:'#2342',CustomerName:"Naiful Islam",WorkerName:"Naiful Islam",Workinghours:"2 hours 20 minutes",Paid:"$150",Serviceaddress:"Address will be here",Status:"Scheduled"},
    {BookingId:'#2342',CustomerName:"Naiful Islam",WorkerName:"Naiful Islam",Workinghours:"2 hours 20 minutes",Paid:"$150",Serviceaddress:"Address will be here",Status:"Scheduled"},
    {BookingId:'#2342',CustomerName:"Naiful Islam",WorkerName:"Naiful Islam",Workinghours:"2 hours 20 minutes",Paid:"$150",Serviceaddress:"Address will be here",Status:"Scheduled"},
    {BookingId:'#2342',CustomerName:"Naiful Islam",WorkerName:"Naiful Islam",Workinghours:"2 hours 20 minutes",Paid:"$150",Serviceaddress:"Address will be here",Status:"Scheduled"},
    {BookingId:'#2342',CustomerName:"Naiful Islam",WorkerName:"Naiful Islam",Workinghours:"2 hours 20 minutes",Paid:"$150",Serviceaddress:"Address will be here",Status:"Scheduled"},
    {BookingId:'#2342',CustomerName:"Naiful Islam",WorkerName:"Naiful Islam",Workinghours:"2 hours 20 minutes",Paid:"$150",Serviceaddress:"Address will be here",Status:"Scheduled"},
    {BookingId:'#2342',CustomerName:"Naiful Islam",WorkerName:"Naiful Islam",Workinghours:"2 hours 20 minutes",Paid:"$150",Serviceaddress:"Address will be here",Status:"Scheduled"},
    {BookingId:'#2342',CustomerName:"Naiful Islam",WorkerName:"Naiful Islam",Workinghours:"2 hours 20 minutes",Paid:"$150",Serviceaddress:"Address will be here",Status:"Scheduled"},
    {BookingId:'#2342',CustomerName:"Naiful Islam",WorkerName:"Naiful Islam",Workinghours:"2 hours 20 minutes",Paid:"$150",Serviceaddress:"Address will be here",Status:"Scheduled"},
    {BookingId:'#2342',CustomerName:"Naiful Islam",WorkerName:"Naiful Islam",Workinghours:"2 hours 20 minutes",Paid:"$150",Serviceaddress:"Address will be here",Status:"Scheduled"},
    {BookingId:'#2342',CustomerName:"Naiful Islam",WorkerName:"Naiful Islam",Workinghours:"2 hours 20 minutes",Paid:"$150",Serviceaddress:"Address will be here",Status:"Scheduled"},
    {BookingId:'#2342',CustomerName:"Naiful Islam",WorkerName:"Naiful Islam",Workinghours:"2 hours 20 minutes",Paid:"$150",Serviceaddress:"Address will be here",Status:"Scheduled"},
    {BookingId:'#2342',CustomerName:"Naiful Islam",WorkerName:"Naiful Islam",Workinghours:"2 hours 20 minutes",Paid:"$150",Serviceaddress:"Address will be here",Status:"Scheduled"},
    {BookingId:'#2342',CustomerName:"Naiful Islam",WorkerName:"Naiful Islam",Workinghours:"2 hours 20 minutes",Paid:"$150",Serviceaddress:"Address will be here",Status:"Scheduled"},
    {BookingId:'#2342',CustomerName:"Naiful Islam",WorkerName:"Naiful Islam",Workinghours:"2 hours 20 minutes",Paid:"$150",Serviceaddress:"Address will be here",Status:"Scheduled"},
    {BookingId:'#2342',CustomerName:"Naiful Islam",WorkerName:"Naiful Islam",Workinghours:"2 hours 20 minutes",Paid:"$150",Serviceaddress:"Address will be here",Status:"Scheduled"},{BookingId:'#2342',CustomerName:"Naiful Islam",WorkerName:"Naiful Islam",Workinghours:"2 hours 20 minutes",Paid:"$150",Serviceaddress:"Address will be here",Status:"Scheduled"},
    {BookingId:'#2342',CustomerName:"Naiful Islam",WorkerName:"Naiful Islam",Workinghours:"2 hours 20 minutes",Paid:"$150",Serviceaddress:"Address will be here",Status:"Scheduled"},
    {BookingId:'#2342',CustomerName:"Naiful Islam",WorkerName:"Naiful Islam",Workinghours:"2 hours 20 minutes",Paid:"$150",Serviceaddress:"Address will be here",Status:"Scheduled"},
    {BookingId:'#2342',CustomerName:"Naiful Islam",WorkerName:"Naiful Islam",Workinghours:"2 hours 20 minutes",Paid:"$150",Serviceaddress:"Address will be here",Status:"Scheduled"},
    {BookingId:'#2342',CustomerName:"Naiful Islam",WorkerName:"Naiful Islam",Workinghours:"2 hours 20 minutes",Paid:"$150",Serviceaddress:"Address will be here",Status:"Scheduled"},
    {BookingId:'#2342',CustomerName:"Naiful Islam",WorkerName:"Naiful Islam",Workinghours:"2 hours 20 minutes",Paid:"$150",Serviceaddress:"Address will be here",Status:"Scheduled"},
    {BookingId:'#2342',CustomerName:"Naiful Islam",WorkerName:"Naiful Islam",Workinghours:"2 hours 20 minutes",Paid:"$150",Serviceaddress:"Address will be here",Status:"Scheduled"},
    {BookingId:'#2342',CustomerName:"Naiful Islam",WorkerName:"Naiful Islam",Workinghours:"2 hours 20 minutes",Paid:"$150",Serviceaddress:"Address will be here",Status:"Scheduled"},
    {BookingId:'#2342',CustomerName:"Naiful Islam",WorkerName:"Naiful Islam",Workinghours:"2 hours 20 minutes",Paid:"$150",Serviceaddress:"Address will be here",Status:"Scheduled"},
    {BookingId:'#2342',CustomerName:"Naiful Islam",WorkerName:"Naiful Islam",Workinghours:"2 hours 20 minutes",Paid:"$150",Serviceaddress:"Address will be here",Status:"Scheduled"},
    {BookingId:'#2342',CustomerName:"Naiful Islam",WorkerName:"Naiful Islam",Workinghours:"2 hours 20 minutes",Paid:"$150",Serviceaddress:"Address will be here",Status:"Scheduled"},
    {BookingId:'#2342',CustomerName:"Naiful Islam",WorkerName:"Naiful Islam",Workinghours:"2 hours 20 minutes",Paid:"$150",Serviceaddress:"Address will be here",Status:"Scheduled"},
    {BookingId:'#2342',CustomerName:"Naiful Islam",WorkerName:"Naiful Islam",Workinghours:"2 hours 20 minutes",Paid:"$150",Serviceaddress:"Address will be here",Status:"Scheduled"},
    {BookingId:'#2342',CustomerName:"Naiful Islam",WorkerName:"Naiful Islam",Workinghours:"2 hours 20 minutes",Paid:"$150",Serviceaddress:"Address will be here",Status:"Scheduled"},
    {BookingId:'#2342',CustomerName:"Naiful Islam",WorkerName:"Naiful Islam",Workinghours:"2 hours 20 minutes",Paid:"$150",Serviceaddress:"Address will be here",Status:"Scheduled"},
    {BookingId:'#2342',CustomerName:"Naiful Islam",WorkerName:"Naiful Islam",Workinghours:"2 hours 20 minutes",Paid:"$150",Serviceaddress:"Address will be here",Status:"Scheduled"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
