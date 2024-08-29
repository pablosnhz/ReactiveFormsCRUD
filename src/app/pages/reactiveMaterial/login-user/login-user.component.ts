import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { reqService } from 'src/app/services/req.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent {

  constructor( private reqService: reqService, private router: Router ){}

formUser: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit(){
    if(this.formUser.valid){
      this.reqService.reqresLogin(this.formUser.value.username, this.formUser.value.password).subscribe( res => {
        if(res.token){
          localStorage.setItem('token', res.token);
          this.router.navigate(['formsmaterial', 'form']);
        }
      })

    }
  }



}
