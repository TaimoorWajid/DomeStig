import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-googlemaps',
  templateUrl: './googlemaps.component.html',
  styleUrls: ['./googlemaps.component.css']
})
export class GooglemapsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let loader=new Loader({
      apiKey:"AIzaSyB9XBjTknQTC__VhTRB6DSUSCyd_fXG6xk"

    })
    loader.load().then(()=>{
      new google.maps.Map(<HTMLDivElement>document.getElementById("map"),{
        center:{lat:30.3753,lng:69.3451},
        zoom:6
      })

    })
  }

}
