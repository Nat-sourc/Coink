import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDataService } from '../../../service/user-data.service';

@Component({
  selector: 'app-confirm-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confirm-user.component.html',
  styleUrl: './confirm-user.component.css'
})
export class ConfirmUserComponent implements OnInit{
  public imageUrl = '/assets/img/welcome.png';
  public showOverlay: boolean = true;
  public userData:any;

  constructor(private _ar: ActivatedRoute, private registroService: UserDataService){
  } 

  ngOnInit(): void {
    let id = this._ar.snapshot.paramMap.get('id');

    this.userData = this.registroService.getUserData();
    console.log('User Data:', this.userData);
   
  
  }
  continue() {
    this.showOverlay = false;
  }
  

}
