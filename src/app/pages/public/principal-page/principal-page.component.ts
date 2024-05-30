import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal-page',
  standalone: true,
  imports: [],
  templateUrl: './principal-page.component.html',
  styleUrl: './principal-page.component.css'
})
export class PrincipalPageComponent {

  imageUrl='/assets/img/log.png';

  constructor(private router: Router) { }

 

  iniciarSesion(){

  }
  registrarse(){
    this.router.navigate(['enterNumber']);
  }

}
