import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listofservices',
  templateUrl: './listofservices.component.html',
  styleUrls: ['./listofservices.component.css']
})
export class ListofservicesComponent implements OnInit {

  p:number=1;
  
  students:Array<any>=[
    {Name:'Umair',Gender:"Male",Services:"This is my whole time service",Class:9,Status:"Active"},
    {Name:'Uzair',Gender:"Male",Services:"This is my whole time service",Class:9,Status:"Active"},
    {Name:'Zohaib',Gender:"Male",Services:"This is my whole time service",Class:9,Status:"Active"},
    {Name:'Khan',Gender:"Male",Services:"This is my whole time service",Class:9,Status:"InActive"},
    {Name:'Jaan',Gender:"Male",Services:"This is my whole time service",Class:9,Status:"InActive"},
    {Name:'Rashid',Gender:"Male",Services:"This is my whole time service",Class:9,Status:"InActive"},
    {Name:'Usman',Gender:"Male",Services:"This is my whole time service",Class:9,Status:"InActive"},
    {Name:'Umair',Gender:"Male",Services:"This is my whole time service",Class:9,Status:"InActive"},
    {Name:'Sabir',Gender:"Male",Services:"This is my whole time service",Class:9,Status:"Active"},
    {Name:'Umair',Gender:"Male",Services:"This is my whole time service",Class:9,Status:"Active"},
    {Name:'Waqas',Gender:"Male",Services:"This is my whole time service",Class:9,Status:"Active"},
    {Name:'Ahmad',Gender:"Male",Services:"This is my whole time service",Class:9,Status:"Active"},
    {Name:'Sarmad',Gender:"Male",Services:"This is my whole time service",Class:9,Status:"Active"},
    {Name:'Umair',Gender:"Male",Services:"This is my whole time service",Class:9,Status:"Active"},
    {Name:'Umair',Gender:"Male",Services:"This is my whole time service",Class:9,Status:"Active"},
    {Name:'Umair',Gender:"Male",Services:"This is my whole time service",Class:9,Status:"Active"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
