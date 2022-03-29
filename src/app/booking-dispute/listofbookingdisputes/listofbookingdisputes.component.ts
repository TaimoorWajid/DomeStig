import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listofbookingdisputes',
  templateUrl: './listofbookingdisputes.component.html',
  styleUrls: ['./listofbookingdisputes.component.css']
})
export class ListofbookingdisputesComponent implements OnInit {

  term: string = '';
  p:number=1;

  Bookings: any[] = [
    { ID: 1, SelectedReason: "Enter your cancelationreason here", Username: "Naiful Islam", Userrole: "Customer", Amount: "$ 450", Date: "August 19,2021", Status: "Completed" },
    { ID: 1, SelectedReason: "Enter your cancelationreason here", Username: "Naiful Islam", Userrole: "Customer", Amount: "$ 450", Date: "August 19,2021", Status: "Completed" },
    { ID: 1, SelectedReason: "Enter your cancelationreason here", Username: "Naiful Islam", Userrole: "Customer", Amount: "$ 450", Date: "August 19,2021", Status: "Completed" },
    { ID: 1, SelectedReason: "Enter your cancelationreason here", Username: "Naiful Islam", Userrole: "Worker", Amount: "$ 450", Date: "August 19,2021", Status: "Completed" },
    { ID: 1, SelectedReason: "Enter your cancelationreason here", Username: "Naiful Islam", Userrole: "Customer", Amount: "$ 450", Date: "August 19,2021", Status: "Completed" },
    { ID: 1, SelectedReason: "Enter your cancelationreason here", Username: "Naiful Islam", Userrole: "Customer", Amount: "$ 450", Date: "August 19,2021", Status: "Completed" },
    { ID: 1, SelectedReason: "Enter your cancelationreason here", Username: "Naiful Islam", Userrole: "Customer", Amount: "$ 450", Date: "August 19,2021", Status: "Completed" },
    { ID: 1, SelectedReason: "Enter your cancelationreason here", Username: "Naiful Islam", Userrole: "Worker", Amount: "$ 450", Date: "August 19,2021", Status: "Completed" },
    { ID: 1, SelectedReason: "Enter your cancelationreason here", Username: "Naiful Islam", Userrole: "Customer", Amount: "$ 450", Date: "August 19,2021", Status: "Completed" },
    { ID: 1, SelectedReason: "Enter your cancelationreason here", Username: "Naiful Islam", Userrole: "Customer", Amount: "$ 450", Date: "August 19,2021", Status: "Completed" },
    { ID: 1, SelectedReason: "Enter your cancelationreason here", Username: "Naiful Islam", Userrole: "Customer", Amount: "$ 450", Date: "August 19,2021", Status: "Completed" },
    { ID: 1, SelectedReason: "Enter your cancelationreason here", Username: "Naiful Islam", Userrole: "Worker", Amount: "$ 450", Date: "August 19,2021", Status: "Completed" },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
