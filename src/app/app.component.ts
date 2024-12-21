import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { MatDialog, MatDialogModule} from '@angular/material/dialog';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UsersListComponent, MatDialogModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private dialog: MatDialog) {}
 
}
