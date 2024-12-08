import { Component, inject } from '@angular/core';
import { UsersService } from '../users.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { User } from '../users-list/users-list.component';


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

  createUser(event: User): void {
    this.usersService.createUser(event)
  }
} 
