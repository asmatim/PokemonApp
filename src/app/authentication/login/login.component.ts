import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  errorMessage: string;

  constructor(public authService: AuthService, private router: Router, private titleService: Title) {
    this.username = '';
    this.password = '';
    this.errorMessage = '';
  }

  ngOnInit() {
    this.titleService.setTitle('Connexion');
  }

  login() {
    this.authService.login(this.username, this.password).subscribe(() => {
      if (this.authService.isUserLogged) {
        this.errorMessage = '';
        // Rediriger l'utilisateur
        this.router.navigate(['/pokemon/all']);
      } else {
        this.password = '';
        this.errorMessage = 'Identifiant ou mot de passe incorrect.';
      }
    });
  }

}
