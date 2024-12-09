import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UsersApiService } from '../users.api.service';
import { UsersService } from '../users.service';
import { AsyncPipe, NgFor } from '@angular/common';
import { UserCardComponent } from './user-card/user-card.component';
import { UserCreateComponent } from '../user-create/user-create.component';


export interface User {
  id: number,
  name: string,
    username: string,
    email: string,
    address?: {
        street?: string,
        suite?: string,
        city?: string,
        zipcode?: string,
        geo?: {
            lat?: string,
            lng?: string
        }
    },
    phone?: string,
    website: string,
    company: {
        name: string,
        catchPhrase?: string,
        bs?: string
}
}
 
@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [NgFor, AsyncPipe, UserCardComponent, UserCreateComponent],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent {
  readonly apiUsersService = inject(UsersApiService)
  readonly usersService = inject(UsersService)
  users = this.usersService.users
  
  constructor() {
   this.apiUsersService.getUsers().subscribe(
     (response: any) => {
       this.usersService.setUsers(response)
     }
   )
  }
 
  deleteUser(id: number) {
   this.usersService.deleteUser(id)
}
}