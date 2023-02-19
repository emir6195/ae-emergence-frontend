import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SmsService {

  constructor(private http: HttpClient) { }

  baseUrl : string = 'http://127.0.0.1:3000'

  getIncomingMessages() {
    return this.http.get(this.baseUrl + '/api/incoming-sms');
  }

  getOutgoingMessages() {
    return this.http.get(this.baseUrl + '/api/outgoing-sms');
  }

}
