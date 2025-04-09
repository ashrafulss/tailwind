import { Component, OnInit } from '@angular/core';
import { AuthsService } from '../auths.service';
import { response } from 'express';
import { error } from 'console';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  
  ngOnInit(): void {
   
  }


  constructor(private authService: AuthsService){

  }
  



  test() {
    this.authService.test().subscribe(
      (response) => {
        console.log('Response from test API', response);
      },
      (error) => {
        console.error('Error hitting the API:', error);
      }
    );
  }
  

}
