import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  imports: [],
  templateUrl: './topbar.component.html',
})
export class TopbarComponent {
  private router = inject(Router);

  onLogout() {
    this.router.navigate(['/auth/login']);
  }
}
