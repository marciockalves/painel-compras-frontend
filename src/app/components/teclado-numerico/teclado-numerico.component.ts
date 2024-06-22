import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-teclado-numerico',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatCardModule, NgFor],
  templateUrl: './teclado-numerico.component.html',
  styleUrl: './teclado-numerico.component.css'
})
export class TecladoNumericoComponent {

  @Output() sendKeyEvent = new EventEmitter<string>();
  @Input() disabledButton:boolean = false;

  sendKey(event:string):void {
    
    this.sendKeyEvent.emit(event);
  }
}
