import { Component } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms-users-tailwind',
  templateUrl: './forms-users-tailwind.component.html',
  styleUrls: ['./forms-users-tailwind.component.css']
})
export class FormsUsersTailwindComponent {

  constructor( private router: Router ){}

  logOutTailwind(): void {
    const token = localStorage.removeItem('token');

    if(token == null){
      this.router.navigate(['/formstailwind']);
    }
  }
}
