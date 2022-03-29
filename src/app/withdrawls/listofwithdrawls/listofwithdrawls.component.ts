import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listofwithdrawls',
  templateUrl: './listofwithdrawls.component.html',
  styleUrls: ['./listofwithdrawls.component.css']
})
export class ListofwithdrawlsComponent implements OnInit {


  p: number = 1;
  term: string = "";
  WithDrawls: any[] = [
    { ID: 1, Summary: "Withdraw request to bank account", Amount: "$ 450", Date: "August 19,2021", Status: "Completed" },
    { ID: 1, Summary: "Withdraw request to bank account", Amount: "$ 450", Date: "August 19,2021", Status: "Completed" },
    { ID: 1, Summary: "Withdraw request to Paypal account", Amount: "$ 450", Date: "August 19,2021", Status: "Completed" },
    { ID: 1, Summary: "Withdraw request to bank account", Amount: "$ 450", Date: "August 19,2021", Status: "Completed" },
    { ID: 1, Summary: "Withdraw request to bank account", Amount: "$ 450", Date: "August 19,2021", Status: "Completed" },
    { ID: 1, Summary: "Withdraw request to bank account", Amount: "$ 450", Date: "August 19,2021", Status: "Completed" },
    { ID: 1, Summary: "Withdraw request to JazzCash account", Amount: "$ 450", Date: "August 19,2021", Status: "Completed" },
    { ID: 1, Summary: "Withdraw request to bank account", Amount: "$ 450", Date: "August 19,2021", Status: "Completed" },
    { ID: 1, Summary: "Withdraw request to bank account", Amount: "$ 450", Date: "August 19,2021", Status: "Completed" },
    { ID: 1, Summary: "Withdraw request to bank account", Amount: "$ 450", Date: "August 19,2021", Status: "Completed" },
    { ID: 1, Summary: "Withdraw request to bank account", Amount: "$ 450", Date: "August 19,2021", Status: "Completed" },
    { ID: 1, Summary: "Withdraw request to bank account", Amount: "$ 450", Date: "August 19,2021", Status: "Completed" },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
