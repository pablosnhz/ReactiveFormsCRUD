import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { take } from 'rxjs';
import { reqService } from 'src/app/services/req.service';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.css']
})
export class AddEditUserComponent implements OnInit{

  userNew: FormGroup;
  hours: string[] =  ["0-5", "6-11", "12-17", "18-23"];

  constructor(private fb: FormBuilder,
              private reqService: reqService,
              public dialogRef: MatDialogRef<AddEditUserComponent>,
              @Inject(MAT_DIALOG_DATA) public editData: any
            ) {
    this.userNew = this.fb.group({
      // id: [''],
      first_name: [''],
      last_name: [''],
      email: [''],
      gender: [''],
      hours: [''],
    })
   }

  ngOnInit(): void {
    this.userNew.patchValue(this.editData);
  }

   formSubmit(): void {
    if(this.userNew.valid){
      if(this.editData){
        this.reqService.updateUserJson(this.editData.id,this.userNew.value).subscribe((user) => {
          this.dialogRef.close(user);
        })
      } else {
        this.reqService.createUserJson(this.userNew.value).subscribe((user) => {
          this.dialogRef.close(user);
        })
      }
    }
    // if(this.userNew.valid){
    //   // console.log(this.userNew.value);
    //   this.reqService.createUserJson(this.userNew.value).subscribe((user) => {
    //     this.dialogRef.close(user);
    //   })
    // }
   }

  //  formSubmit(){
  //   const newUser = this.userNew.value;
  //   this.reqService.createUser(newUser).subscribe((user) => {
  //     this.userNew.reset();
  //     this.dialogRef.close(user);
  //     localStorage.setItem('user', JSON.stringify(this.userNew.value));
  //   });
  // }

}
