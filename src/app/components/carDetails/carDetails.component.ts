import { Component, OnInit } from '@angular/core';
import { CarDetails } from 'src/app/models/carDetails';
import { CarService } from 'src/app/services/carDetails.service';

@Component({
  selector: 'app-carDetails',
  templateUrl: './carDetails.component.html',
  styleUrls: ['./carDetails.component.css']
})
export class CarDetailsComponent implements OnInit {

  carDetails: CarDetails[] = [];
  dataLoaded = false;

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.getCars();
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded=true;
    });
  }


  
}
