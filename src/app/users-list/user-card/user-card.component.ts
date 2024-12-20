import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { User } from '../../interface/user.interface';
import { UserCreateComponent } from '../../user-create/user-create.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatDialogModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCardComponent {
  readonly dialog = inject(MatDialog);
  @Input()
  user!: User;

  @Output() 
  deleteUser = new EventEmitter();

  @Output()
  editUser = new EventEmitter();

  onDelete(userId: number) {
    this.deleteUser.emit(userId);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UserCreateComponent, {
      data: {
        idEdit: true,
        user: this.user 
      },
      width: '30%',
      height: '50%',
    });

    dialogRef.afterClosed().subscribe((editResult) => {
      this.editUser.emit(editResult);
    });
  }
}
