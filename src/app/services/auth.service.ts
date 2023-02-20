import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  base_url : string = 'http://127.0.0.1:3000';

  login(username: string, password: string) {
    return this.http.post<LoginModal>(this.base_url + '/api/user/login', {username: username, password: password})
  }

}

export interface LoginModal {
  success: boolean;
  token: string;
}