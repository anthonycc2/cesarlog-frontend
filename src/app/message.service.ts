import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private baseUrl = 'http://localhost:8080/message';

  constructor(private http: HttpClient) { }

  //GET methods  
  sendMessage(): Observable<any> {
    return this.http.get(`${this.baseUrl}/`);
  }

}
