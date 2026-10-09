import { Component, inject } from '@angular/core';
import { LeftLayoutComponent } from '../../../components/left-layout/left-layout.component';
import { RightLayoutComponent } from '../../../components/right-layout/right-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'auth-login',
  imports: [LeftLayoutComponent, RightLayoutComponent, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    isKeepSignedIn: new FormControl(false),
  });

  private router = inject(Router);

  onLogin(event: any) {
    console.log('Login Clicked', this.loginForm.value);
    this.router.navigate(['/app/dashboard']);
  }
}
