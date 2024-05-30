import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-coink',
  standalone: true,
  imports: [],
  templateUrl: './welcome-coink.component.html',
  styleUrl: './welcome-coink.component.css'
})
export class WelcomeCoinkComponent {
  imageUrl='/assets/img/log.png';

  constructor(private router: Router) { }

  redirectToPageDestino() {
    this.router.navigate(['principalPage']);
  }

}
