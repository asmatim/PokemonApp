import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './authentication/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cours-cw';

  constructor(private router: Router, public authService: AuthService) {}

  goToCreate(): void {
      let link = ['pokemon/create'];
      this.router.navigate(link);
  }

  logout(): void {
    this.authService.logout();
    let link = ['login'];
    this.router.navigate(link);
  }
}
