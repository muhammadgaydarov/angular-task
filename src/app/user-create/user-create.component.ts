import { Component, EventEmitter, inject, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { User } from '../interface/user.interface';

@Component({
  selector: 'app-user-create',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.css',
})
export class UserCreateComponent {
  @Output()
  createUser = new EventEmitter();

  public formUsers = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    website: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    companyname: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  submitForm(): void {
    this.createUser.emit(this.formUsers.value);
  }
}
