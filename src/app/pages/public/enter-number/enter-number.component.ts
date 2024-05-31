import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { Router } from '@angular/router';


@Component({
  selector: 'app-enter-number',
  standalone: true,
  imports: [FormsModule ],
  templateUrl: './enter-number.component.html',
  styleUrl: './enter-number.component.css'
})
export class EnterNumberComponent {

  phoneNumber: string = '';

  
  digits: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  imageUrl='/assets/img/log.png';

  constructor(private router: Router) { }

  onDigitClick(digit: string): void {
    this.phoneNumber += digit;
  }

  onBackspaceClick(): void {
    this.phoneNumber = this.phoneNumber.slice(0, -1);
  }

  goBack(){
    this.router.navigate(['principalPage']);
  }

  okey(){
    this.router.navigate(['createUser']);
  }

 

}
