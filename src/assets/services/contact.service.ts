import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
HttpClient

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private _HttpClient:HttpClient) { }

  sendContactDataHome(formData:any):Observable<any>{
    return this._HttpClient.post('https://app.universalstudyedu.com/contact', formData);
  }
}
