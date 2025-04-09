import { Component, OnInit } from '@angular/core';
import { AuthsService } from '../auths.service';
import { FormsModule } from '@angular/forms';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{


 
  credentials = { loginSlug: '', password: '' };  

  constructor(private authService: AuthsService, private router:Router) {}

  ngOnInit(): void {
 
    console.log("LoginComponent initialized");
  }

  login(): void {
    // Call the login method of your AuthService
    this.authService.login(this.credentials).subscribe(
      (response) => {
        console.log('Login successful', response);
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        console.error('Login failed', error);
      }
    );
  }




  



}
