import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IUsuariojson } from 'src/app/core/models/userjson';

@Component({
  selector: 'app-forms-users-tailwind',
  templateUrl: './forms-users-tailwind.component.html',
  styleUrls: ['./forms-users-tailwind.component.css']
})
export class FormsUsersTailwindComponent implements OnInit {

  userForm: FormGroup;
  userData: any[] = [];
  isModalOpen: boolean = false;
  showModal: boolean = false;

  constructor( private router: Router, private usersService: UsersService, private fb: FormBuilder ){
    this.userForm = this.fb.group({
      first_name: [''],
      last_name: [''],
      email: [''],
      gender: [''],
      hours: [''],
    })
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.usersService.getUser().subscribe((res) => {
      this.userData = res;
      console.log(this.userData);
    });
  }

  sendSubmit(){
    // console.log(this.userForm.value);
    if(this.userForm.valid){
      this.usersService.addUser(this.userForm.value).subscribe(() => {
        this.getUsers();
        this.userForm.reset();
        this.isModalOpen = false;
      })
    }
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }

  // editData(): void {
  //   this.usersService.editUser(this.userForm.value, this.userForm.value.id).subscribe((user) => {

  //   })
  // }

  deleteUsers(id: number): void {
    this.usersService.deleteUser(id).subscribe(() => {
      this.getUsers();
      this.userForm.reset();
      this.showModal = false;
    })
  }

  logOutTailwind(): void {
    const token = localStorage.removeItem('token');

    if(token == null){
      this.router.navigate(['/formstailwind']);
    }
  }
}
