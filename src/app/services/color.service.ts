import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl='https://localhost:44392/api/';

  constructor(private httpClient:HttpClient) { }

  getAllColors():Observable<ListResponseModel<Color>>{
    let newPath = this.apiUrl + "colors/getall"
    return this.httpClient.get<ListResponseModel<Color>>(newPath);
  }
}
