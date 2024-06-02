import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-finally',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './finally.component.html',
  styleUrl: './finally.component.css'
})
export class FinallyComponent {
  constructor(private router: Router, private _ar: ActivatedRoute) { }
  isChecked = false;
  imageUrl = '/assets/img/pigSecurity.png';

  goBack() {
    this.router.navigate(['createUser']);
  }

  confirm(){
    let id = this._ar.snapshot.paramMap.get('id');
    this.router.navigate(['private/welcomeCoink/'+ id]);
  }

}
