import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable()
export class AuthService {
	isUserLogged: boolean = false;
  username = 'asma';
  password = 'asma';

	login(name: string, password: string): Observable<boolean> {

		let isUserLogged = (name === this.username && password === this.password);

		return of(true).pipe(
			delay(1000),
			tap(val => this.isUserLogged = isUserLogged)
		);
	}

	// Une méthode de déconnexion
	logout(): void {
		this.isUserLogged = false;
	}
}
