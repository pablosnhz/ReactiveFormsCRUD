import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { take } from 'rxjs';
import { reqService } from 'src/app/services/req.service';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.css']
})
export class AddEditUserComponent {

  userNew: FormGroup;

  constructor(private fb: FormBuilder, private reqService: reqService, public dialogRef: MatDialogRef<AddEditUserComponent>) {
    this.userNew = this.fb.group({
      id: [''],
      first_name: [''],
      last_name: [''],
      email: [''],
    })
   }

   formSubmit(){
    const newUser = this.userNew.value;
    this.reqService.createUser(newUser).pipe(
      take(1)
    ).subscribe((user) => {
      this.userNew.reset();
      console.log(user);
      // localStorage.setItem('user', JSON.stringify(this.userNew.value));
      this.dialogRef.close(user);
    });
  }

}
