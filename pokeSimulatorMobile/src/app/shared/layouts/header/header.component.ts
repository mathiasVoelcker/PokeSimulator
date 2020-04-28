import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  showToggleItems: boolean;

  constructor(private authService: AuthService) {
    this.showToggleItems = false;
  }

  getCSSClass() {
    if(this.showToggleItems) {
      return "navbar-collapse";
    }
    return "navbar-collapse collapse";
  }

  toggleClicked() {
    this.showToggleItems = !this.showToggleItems;
  }

  isLogged() {
    return this.authService.isLogged();
  }

  logout() {
    this.authService.clear();
    localStorage.clear()
  }

}
