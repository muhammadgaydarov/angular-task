import { Component, inject } from '@angular/core';
import { UsersService } from '../users.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-user-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.css'
})
export class UserCreateComponent {
  readonly usersService = inject(UsersService)
  
  public formUsers = new FormGroup({
   name: new FormControl(''),
   username: new FormControl(''),
   email: new FormControl(''),
   companyname: new FormControl('')
  })

  createUser(): void {
    console.log({
      name: this.formUsers.get('name')?.value,
      username: this.formUsers.get('username')?.value,
      email: this.formUsers.get('email')?.value,
      companyname: this.formUsers.get('companyname')?.value
    })
    console.log('USER IS CREATE')
  }
} 
