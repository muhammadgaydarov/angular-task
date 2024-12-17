import { Injectable } from '@angular/core';
import { User } from '../app/interface/user.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  usersSubject = new BehaviorSubject<User[]>([]);
  users = this.usersSubject.asObservable();

  constructor() {}

  setUsers(users: User[]) {
    this.usersSubject.next(users);
  }

  editUser(editedUser: User) {
    this.usersSubject.next(
      this.usersSubject.value.map((user) => {
        if (user.id === editedUser.id) {
          return editedUser;
        } else {
          return user;
        }
      })
    );
  }

  createUser(user: User) {
    const userIsExisting = this.usersSubject.value.find(
      (currentElement) => currentElement.email === user.email
    );

    if (userIsExisting) {
      alert('Такой пользователь уже существует');
    } else {
      this.usersSubject.next([...this.usersSubject.value, user]);
      alert('Новый пользователь успешно добавлен');
    }
  }

  deleteUser(id: number) {
    this.usersSubject.next(
      this.usersSubject.value.filter((item) => {
        if (id === item.id) {
          return false;
        } else {
          return true;
        }
      })
    );
  }
}
