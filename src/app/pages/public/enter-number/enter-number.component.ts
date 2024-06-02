import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import * as XLSX from 'xlsx';



@Component({
  selector: 'app-enter-number',
  standalone: true,
  imports: [FormsModule,CommonModule ],
  templateUrl: './enter-number.component.html',
  styleUrl: './enter-number.component.css'
})
export class EnterNumberComponent {

  public phoneNumber: string = '';
  public validPhoneNumber: boolean = false;

  
  public digits: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  public imageUrl='/assets/img/log.png';

  constructor(private router: Router) { }

  onDigitClick(digit: string): void {
    this.phoneNumber += digit;
    this.validatePhoneNumber();
  }

  onBackspaceClick(): void {
    this.phoneNumber = this.phoneNumber.slice(0, -1);
    this.validatePhoneNumber();
  }

  validatePhoneNumber() {
    const phoneNumberPattern = /^\d{10}$/;
    this.validPhoneNumber = phoneNumberPattern.test(this.phoneNumber);
  }

  


  goBack(){
    this.router.navigate(['principalPage']);
  }

  okey(){
    
    this.router.navigate(['createUser']);
  }

 

}
