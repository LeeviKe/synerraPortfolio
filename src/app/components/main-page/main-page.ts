import { Component, signal } from '@angular/core';
import * as Prism from 'prismjs';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main-page',
  imports: [],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage implements OnInit {
  authCallBacksComponent = signal('');
  exchangeCognitoCode = signal('');
  chatService = signal('');
  enterroom = signal('');
  viestiReaktiivisuus = signal('');

  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get('/auth-call-backs-component.txt', { responseType: 'text' }).subscribe((t) => {
      this.authCallBacksComponent.set(t);
      setTimeout(() => {
        Prism.highlightAll();
      }, 0);
    });
    this.http.get('/exchangeCognitoCode.txt', { responseType: 'text' }).subscribe((t) => {
      this.exchangeCognitoCode.set(t);
      setTimeout(() => {
        Prism.highlightAll();
      }, 0);
    });
    this.http.get('/chat.service.txt', { responseType: 'text' }).subscribe((t) => {
      this.chatService.set(t);
      setTimeout(() => {
        Prism.highlightAll();
      }, 0);
    });
    this.http.get('/enterroom.txt', { responseType: 'text' }).subscribe((t) => {
      this.enterroom.set(t);
      setTimeout(() => {
        Prism.highlightAll();
      }, 0);
    });
    this.http.get('/viestiReaktiivisuus.txt', { responseType: 'text' }).subscribe((t) => {
      this.viestiReaktiivisuus.set(t);
      setTimeout(() => {
        Prism.highlightAll();
      }, 0);
    });
  }
}
