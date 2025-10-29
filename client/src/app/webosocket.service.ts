import { inject, Injectable, signal } from "@angular/core";
import { Router } from "@angular/router";

export interface ChatMessage {
    type: 'message' | 'join' | 'leave';
    user: string;
    content: string;
    timestamp: number;
}

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  private socket: WebSocket | null = null;

  username = signal<string>('');

  messages = signal<ChatMessage[]>([]);

  private router = inject(Router);

  constructor() {
    this.loadSession();
  }

  private loadSession() {
    const savedUsername = localStorage.getItem('username');

    if (savedUsername) {
      this.connect(savedUsername);

      // obtener los mensajes
    }else {
      this.router.navigate(['/']);
    }
  }

  connect(username: string) {
    localStorage.setItem('username', username);
    this.username.set(username);
    this.socket = new WebSocket('ws://localhost:3000');

    this.socket.onopen = () => {
      this.joinChat();
    };

    this.socket.onmessage = (event) => {
      const menssage = JSON.parse(event.data) as ChatMessage;

      this.messages.update((oldMessages) => [...oldMessages, menssage]);
    };

    this.socket.onclose = () => {
      this.socket = null;
      console.log('webSocket connection closed');
    };
  }

  sendChatMessage(content: string) {
    const message: ChatMessage = {
      type: 'message',
      user: this.username(),
      content,
      timestamp: Date.now(),
    };

    this.sendMessage(message);
  }

  private joinChat() {
    const joinMessage: ChatMessage = {
      type: 'join',
      user: this.username(),
      timestamp: Date.now(),
      content: `Bienvenido al chat ${this.username()},`
    };

    this.sendMessage(joinMessage);
  }

  private sendMessage(message: ChatMessage) {
    if(this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify(message));
    }
  }

  logOut() {
    if (this.socket) {
      this.socket.close();
      this.username.set('');
    }
  }
}

