import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login-tailwind',
  templateUrl: './login-tailwind.component.html',
  styleUrls: ['./login-tailwind.component.css']
})
export class LoginTailwindComponent {

  constructor(private usersService: UsersService, private router: Router){}

  formUsers: FormGroup = new FormGroup({
    username: new FormControl('', Validators.email),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  submitLogin(): void {
    if(this.formUsers.valid) {
      this.usersService.getLogin(this.formUsers.value.username, this.formUsers.value.password).subscribe( res => {
        if(res.token){
          localStorage.setItem('token', res.token)
          this.router.navigate(['formstailwind' , 'formtailwinduser']);
        } else {
          this.router.navigate(['home']);
        }
    })
    }
  }
}
