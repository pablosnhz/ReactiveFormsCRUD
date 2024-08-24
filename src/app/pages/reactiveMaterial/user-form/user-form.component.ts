import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { take, takeUntil } from 'rxjs';
import { data, IUsuario } from 'src/app/models/usuarios';
import { reqService } from 'src/app/services/req.service';
import { AutoDestroyService } from 'src/app/services/utils/auto-destroy.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit{

  userForm: FormGroup;

  constructor(private fb: FormBuilder, private serviceReq: reqService, private router: Router, private destroy$: AutoDestroyService ){
    this.userForm = this.fb.group({
      first_name: [''],
      last_name: [''],
      email: [''],
    })
  }

  ngOnInit(): void {}

  onSubmit(): void {
    this.serviceReq.createUser(this.userForm.value).pipe(
      take(1)
    ).subscribe((response: IUsuario) => {
      this.router.navigate(['/users']);
    })
  }
}



