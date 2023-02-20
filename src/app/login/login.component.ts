import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: any;
  password: any;

  constructor(private authService: AuthService, public router: Router) {
    
  }

  login() {
    this.authService.login(this.username, this.password).subscribe(data => {
      if (data.success) {
        localStorage.setItem('token', `${data.token}`);
        this.router.navigateByUrl('/dashboard');
      }
    });
  }

}
