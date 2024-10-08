import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router){}

  goToFormsLogin(){
    const token = localStorage.getItem('token');

    if(token){
      this.router.navigate(['formsmaterial', 'form']);
    } else {
      this.router.navigate(['formsmaterial']);
    }
  }

  goToFormsTailwindHome(){
    const token = localStorage.getItem('token');

    if(token){
      this.router.navigate(['formstailwind', 'formtailwinduser']);
    } else {
      this.router.navigate(['formstailwind']);
    }
  }
}
