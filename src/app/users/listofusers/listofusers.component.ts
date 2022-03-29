import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listofusers',
  templateUrl: './listofusers.component.html',
  styleUrls: ['./listofusers.component.css']
})
export class ListofusersComponent implements OnInit {

  term: string = "";
  p: number = 1;

  Users: any[] = [
    { ID: "#2342", Name: "Naiful Islam", Email: "naifulIslam@gmail.com", PhoneNo: "03004455666", JoinDate: "12th may,2021", Status: "Active" },
    { ID: "#2342", Name: "Naiful Islam", Email: "naifulIslam@gmail.com", PhoneNo: "03004455666", JoinDate: "12th may,2021", Status: "Active" },
    { ID: "#2342", Name: "Naiful Islam", Email: "naifulIslam@gmail.com", PhoneNo: "03004455666", JoinDate: "12th may,2021", Status: "Active" },
    { ID: "#2342", Name: "Naiful Islam", Email: "naifulIslam@gmail.com", PhoneNo: "03004455666", JoinDate: "12th may,2021", Status: "Active" },
    { ID: "#2342", Name: "Naiful Islam", Email: "naifulIslam@gmail.com", PhoneNo: "03004455666", JoinDate: "12th may,2021", Status: "Active" },
    { ID: "#2342", Name: "Naiful Islam", Email: "naifulIslam@gmail.com", PhoneNo: "03004455666", JoinDate: "12th may,2021", Status: "Active" },
    { ID: "#2342", Name: "Naiful Islam", Email: "naifulIslam@gmail.com", PhoneNo: "03004455666", JoinDate: "12th may,2021", Status: "Active" },
    { ID: "#2342", Name: "Naiful Islam", Email: "naifulIslam@gmail.com", PhoneNo: "03004455666", JoinDate: "12th may,2021", Status: "Active" },
    { ID: "#2342", Name: "Naiful Islam", Email: "naifulIslam@gmail.com", PhoneNo: "03004455666", JoinDate: "12th may,2021", Status: "Active" },
    { ID: "#2342", Name: "Naiful Islam", Email: "naifulIslam@gmail.com", PhoneNo: "03004455666", JoinDate: "12th may,2021", Status: "Active" },
    { ID: "#2342", Name: "Naiful Islam", Email: "naifulIslam@gmail.com", PhoneNo: "03004455666", JoinDate: "12th may,2021", Status: "Active" },
    { ID: "#2342", Name: "Naiful Islam", Email: "naifulIslam@gmail.com", PhoneNo: "03004455666", JoinDate: "12th may,2021", Status: "Active" },
    { ID: "#2342", Name: "Naiful Islam", Email: "naifulIslam@gmail.com", PhoneNo: "03004455666", JoinDate: "12th may,2021", Status: "Active" },
    { ID: "#2342", Name: "Naiful Islam", Email: "naifulIslam@gmail.com", PhoneNo: "03004455666", JoinDate: "12th may,2021", Status: "Active" },
    { ID: "#2342", Name: "Naiful Islam", Email: "naifulIslam@gmail.com", PhoneNo: "03004455666", JoinDate: "12th may,2021", Status: "Active" },
    { ID: "#2342", Name: "Naiful Islam", Email: "naifulIslam@gmail.com", PhoneNo: "03004455666", JoinDate: "12th may,2021", Status: "Active" },
    { ID: "#2342", Name: "Naiful Islam", Email: "naifulIslam@gmail.com", PhoneNo: "03004455666", JoinDate: "12th may,2021", Status: "Active" },
    { ID: "#2342", Name: "Naiful Islam", Email: "naifulIslam@gmail.com", PhoneNo: "03004455666", JoinDate: "12th may,2021", Status: "Active" },

  ]

  constructor() { }

  ngOnInit(): void {
  }

  // populateform(user:any){
  //   debugger;
  //  this.Users=Object.assign({},user);
  // }


  deleteItem(user:any){
    debugger;
    this.Users.splice(0,1)
  }

}
