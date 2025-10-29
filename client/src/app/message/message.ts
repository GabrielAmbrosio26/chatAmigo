import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { ChatMessage } from '../webosocket.service';

@Component({
  selector: 'app-message',
  imports: [NgClass],
  templateUrl: './message.html',
  styleUrl: './message.scss',
})
export class Message {

  myMessage = input<boolean>(false);

  message = input.required<ChatMessage>();
}
