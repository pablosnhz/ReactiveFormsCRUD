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
  userData: IUsuariojson[] = [];
  isModalOpen: boolean = false;
  showModal: boolean = false;
  userId: number | null = null;

  p: number = 1;
  collection: any[] = [];

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

  // this.userData.forEach((user) => {
  //   this.userForm.patchValue(user);
  // })

  sendSubmit(): void {
    if (this.userForm.valid) {
      if (this.userId !== null) {
        this.usersService.editUser(this.userForm.value, this.userId).subscribe(() => {
          this.getUsers();
          this.closeModal();
        });
      } else {
        this.usersService.addUser(this.userForm.value).subscribe(() => {
          this.getUsers();
          this.userForm.reset();
          this.closeModal();
        });
      }
    }
  }

searchUser(event: Event): void {
  const value = (event.target as HTMLInputElement).value;
  this.usersService.getUser().subscribe((res) => {
    this.userData = res.filter((user: IUsuariojson) =>
      user.first_name.toLowerCase().includes(value) ||
      user.last_name.toLowerCase().includes(value));
  });
}

  openModal(user?: IUsuariojson): void {
    if (user) {
      this.userId = user.id;
      this.userForm.patchValue(user);
    } else {
      this.userForm.reset();
      this.userId = null;
    }
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  // tuve problemas con el modal que no reconocia el id al abrirse, borraba siempre el ultimo de la lista
  toggleModal(id?: number): void {
    this.userId = id ?? null;
    this.showModal = !this.showModal;
  }

  deleteUsers(id: number | null): void {
    if (id !== null) {
      this.usersService.deleteUser(id).subscribe(() => {
        this.getUsers();
        this.showModal = false;
      });
    }
  }


  logOutTailwind(): void {
    const token = localStorage.removeItem('token');

    if(token == null){
      this.router.navigate(['/formstailwind']);
    }
  }
}
