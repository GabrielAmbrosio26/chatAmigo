import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { WebSocketService } from '../webosocket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class Login {
  username = new FormControl('');

  private websocketService = inject(WebSocketService);
  private route = inject(Router);

  goToChat() {
    const username = this.username.value;
    if (!username) return;

    this.websocketService.connect(username);
    this.route.navigate(['chat']);
  }
}
