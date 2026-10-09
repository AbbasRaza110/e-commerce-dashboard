import { Component, input, output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'auth-right-layout',
  imports: [ReactiveFormsModule],
  templateUrl: './right-layout.component.html',
  styleUrl: './right-layout.component.css',
})
export class RightLayoutComponent {
  //Props
  // onLogin = input<(e: any) => void>();
  loginFormGroup = input.required<FormGroup>();
  loginSubmit = output<any>();

  isPasswordVisible: Boolean = false;

  togglePasswordVisibilty() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  handleFormSubmit(event: any) {
    event.preventDefault();

    // 3. Emit the event upwards rather than trying to invoke a passed-in function
    this.loginSubmit.emit(event);
  }
}
