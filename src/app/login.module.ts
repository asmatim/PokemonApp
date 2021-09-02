import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AuthGuard } from './authentication/auth-guard.service';
import { AuthService } from './authentication/auth.service';
import { LoginRoutingModule } from './authentication/login-routing.module';
import { LoginComponent } from './authentication/login/login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
  ],
  providers: [
    AuthGuard,
    AuthService
  ],
  bootstrap: []
})
export class LoginModule { }
