import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listofpromos',
  templateUrl: './listofpromos.component.html',
  styleUrls: ['./listofpromos.component.css']
})
export class ListofpromosComponent implements OnInit {


  term:string='';


  promos:any[]=[
    {No:1,Name:"Umair",Email:"nafiulIslam@gmail.com",PhoneNo:"03003344555",Country:"Pakistan",UserRole:"Admin"},
    {No:1,Name:"Nafiul Islam",Email:"nafiulIslam@gmail.com",PhoneNo:"03003344555",Country:"USA",UserRole:"Super Admin"},
    {No:1,Name:"Nafiul Islam",Email:"nafiulIslam@gmail.com",PhoneNo:"03003344555",Country:"Austrailia",UserRole:"Editor"},
    {No:1,Name:"Taimoor Islam",Email:"nafiulIslam@gmail.com",PhoneNo:"03003344555",Country:"India",UserRole:"Admin"},
    {No:1,Name:"Nafiul Islam",Email:"nafiulIslam@gmail.com",PhoneNo:"03003344555",Country:"Nepal",UserRole:"Admin"},
    {No:1,Name:"Nafiul Islam",Email:"nafiulIslam@gmail.com",PhoneNo:"03003344555",Country:"Bangladesh",UserRole:"Service Manager"},
    {No:1,Name:"Nafiul Islam",Email:"nafiulIslam@gmail.com",PhoneNo:"03003344555",Country:"Iraq",UserRole:"Editor"},
    {No:1,Name:"Nafiul Islam",Email:"nafiulIslam@gmail.com",PhoneNo:"03003344555",Country:"Bhotan",UserRole:"Admin"},

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
