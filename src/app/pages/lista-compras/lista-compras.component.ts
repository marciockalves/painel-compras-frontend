import { Component } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';

@Component({
  selector: 'app-lista-compras',
  standalone: true,
  imports: [],
  templateUrl: './lista-compras.component.html',
  styleUrl: './lista-compras.component.css'
})
export class ListaComprasComponent {

  constructor(public websocketService: WebsocketService){
    this.websocketService.sendMessage({code:'texto'});
  }
  public resultScanner:string = '';

  get getResultScanner(){
   
    this.websocketService.getMessage().subscribe(event=>{
      if(event){
        this.resultScanner = event;
      }
    })
    
    return this.resultScanner;
  }
}
