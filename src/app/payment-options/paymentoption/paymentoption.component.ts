import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paymentoption',
  templateUrl: './paymentoption.component.html',
  styleUrls: ['./paymentoption.component.css']
})
export class PaymentoptionComponent implements OnInit {

  url:any;

  constructor() { }

  ngOnInit(): void {
  }


  onImgError(event:any){
    debugger;
    event.target.src = '../../assets/Images/UserImage.png';
  }
  onFileChanged(e:any) {
    debugger;
    let reader = new FileReader();
    if(e.target.files && e.target.files.length > 0) {
      let file = e.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.url = reader.result; 
      };
    }
  }

}
