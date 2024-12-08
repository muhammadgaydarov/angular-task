import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../users-list.component';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  @Input()
  user: User[] = []

  @Output()
  deleteUser = new EventEmitter()

  onDelete(userId: number) {
    this.deleteUser.emit(userId)
  }
}
