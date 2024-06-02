import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-confirm-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confirm-user.component.html',
  styleUrl: './confirm-user.component.css'
})
export class ConfirmUserComponent implements OnInit{
  imageUrl = '/assets/img/welcome.png';
  showOverlay: boolean = true;

  constructor(private _ar: ActivatedRoute){
  } 

  ngOnInit(): void {
    let id = this._ar.snapshot.paramMap.get('id');
  
  
  }
  continue() {
    this.showOverlay = false;
  }
  

}
