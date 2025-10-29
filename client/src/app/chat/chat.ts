import { Component, inject } from '@angular/core';
import { Message } from '../message/message';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { WebSocketService } from '../webosocket.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [Message, ReactiveFormsModule],
  templateUrl: './chat.html',
  styleUrls: ['./chat.scss'],
})
export class Chat {
  [x: string]: any;
  private websocketService =  inject(WebSocketService);

  messages = this.websocketService.messages;

  messageControl = new FormControl('');

  username = this.websocketService.username;

  sendMessage() {
    const value = this.messageControl.value

    if(!value) return;

    this.websocketService.sendChatMessage(value);
    this.messageControl.setValue('')
  }
}
