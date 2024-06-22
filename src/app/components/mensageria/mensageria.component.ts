import { Component, inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
  
} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
@Component({
  selector: 'app-mensageria',
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogClose,
    MatDialogTitle,
    MatDialogActions,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule
  ],
  templateUrl: './mensageria.component.html',
  styleUrl: './mensageria.component.css'
})
export class MensageriaComponent {


  readonly dialog = inject(MatDialog);
  readonly data = inject<any>(MAT_DIALOG_DATA);
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(MensageriaComponent, {
      width: '350px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

}
