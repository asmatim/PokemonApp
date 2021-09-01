import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cours-cw';

  constructor(private router: Router){}

  goToCreate(): void{
      let link = ['pokemon/create'];
      this.router.navigate(link);
  }
}
