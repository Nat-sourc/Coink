import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { ActivatedRoute, Router } from '@angular/router';
import { UserDataService } from '../../../service/user-data.service';

@Component({
  selector: 'app-finally',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './finally.component.html',
  styleUrl: './finally.component.css'
})
export class FinallyComponent implements OnInit{
  constructor(private router: Router, private _ar: ActivatedRoute, private registroService: UserDataService) { }
  public isChecked = false;
  public imageUrl = '/assets/img/pigSecurity.png';
  public userData: any;



  ngOnInit() {
    this.userData = this.registroService.getUserData();
    console.log('User Data:', this.userData);
  }

  goBack() {
    this.router.navigate(['createUser']);
  }

  confirm(){
    let id = this._ar.snapshot.paramMap.get('id');
    this.router.navigate(['private/welcomeCoink/'+ id]);
  }

}
