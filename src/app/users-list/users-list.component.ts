import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UsersApiService } from '../users.api.service';
import { UsersService } from '../users.service';
import { AsyncPipe, NgFor } from '@angular/common';
import { UserCardComponent } from './user-card/user-card.component';
import { UserCreateComponent } from '../user-create/user-create.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [
    NgFor,
    AsyncPipe,
    UserCardComponent,
    UserCreateComponent,
  ],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent {
  readonly apiUsersService = inject(UsersApiService);
  readonly usersService = inject(UsersService);
  readonly dialog = inject(MatDialog);
  users = this.usersService.users;

  constructor() {
    this.apiUsersService.getUsers().subscribe((response: any) => {
      this.usersService.setUsers(response);
    });

    this.usersService.usersSubject.subscribe((users) => console.log(users));
  }

  deleteUser(id: number) {
    this.usersService.deleteUser(id);
  }

  createUser(event: any) {
    this.usersService.createUser({
      id: new Date().getTime(),
      name: event.name,
      email: event.email,
      website: event.website,
      company: {
        name: event.name,
      },
    });
  }

  editUser(id: any) {
    this.usersService.editUser(id)
  }
}

