import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetails } from '../models/carDetails';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl='https://localhost:44392/api/';
  
  constructor(private httpClient: HttpClient) { }

  getCars(): Observable<ListResponseModel<CarDetails>> {
    let newPath = this.apiUrl + 'cars/getall';
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }

  getCarDetails(): Observable<ListResponseModel<CarDetails>> {
    let newPath = this.apiUrl + "cars/getcardetails"
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }

  getCarsByBrand(brandId: number): Observable<ListResponseModel<CarDetails>> {
    let newPath = this.apiUrl + 'cars/getcarsbybrand?brandId=' + brandId;
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }

  getCarsByColor(colorId: number): Observable<ListResponseModel<CarDetails>> {
    let newPath = this.apiUrl + 'cars/getcarsbycolor?colorId=' + colorId;
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }


}
