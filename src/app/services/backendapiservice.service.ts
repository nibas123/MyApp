import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendapiserviceService {

  constructor(private http:HttpClient) { }
  getTodo(){
    return this.http.get("https://jsonplaceholder.typicode.com/todos")
  }
}
