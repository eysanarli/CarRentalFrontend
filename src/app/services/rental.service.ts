import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';


@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl='http://localhost:44392/api/';

  constructor(private httpClient:HttpClient) { }


  getRentals():Observable<ListResponseModel<Rental>>{
    let newPath = this.apiUrl + "rentals/getall"
    return this.httpClient.get<ListResponseModel<Rental>>(newPath)

  }
}
