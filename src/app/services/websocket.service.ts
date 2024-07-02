import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private socket: WebSocket;
  private subject: Subject<any>;

  constructor() {
    this.subject = new Subject<any>();
    this.socket = new WebSocket('ws://localhost:3000');
    this.connect();
   }

   private connect():void{
     
    this.socket.onmessage = (event)=>{
      this.subject.next(event.data);
    };

    this.socket.onclose = (event)=>{
      console.log('websocket close', event);
      this.reconnect();
    };

    this.socket.onerror = (event)=>{
      console.log('websocket error', event);
      this.reconnect();
    }

   }
   private reconnect(): void{
    setTimeout(()=>this.connect(), 5000);
  }

  sendMessage(message: any): void{
    console.log('message', message)
   
    this.socket.send(JSON.stringify(message))
    
  }

  getMessage(): Observable<any>{
    return this.subject.asObservable();
  }
}
