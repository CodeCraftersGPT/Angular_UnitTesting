// login.component.ts
import { Component } from '@angular/core';

  import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';

  @Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
  })
  export class LoginComponent {
    username: string = '';
    password: string = '';
    errorMessage: string = '';
    serverMessage: string = '';

    constructor(private userService:UserService) {}

    login() {
      if (!this.username || !this.password) {
        this.errorMessage = 'Username and password are required.';
      } else {
        const user = {
          username: this.username,
          password: this.password
        };
        this.userService.postUser(user).subscribe((res) => {
          this.serverMessage = res.message;
        }, (err) => {
          this.errorMessage = err.error;
        });
        
      }
    }
  }
// login.component.html


