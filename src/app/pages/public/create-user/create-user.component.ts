import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule,Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Genero, TypeDocument } from "../../../localist/locallist";
import { ItemList } from "../../../model/local/item-list";

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule ],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent implements OnInit{

  imageUrl = '/assets/img/log.png';
  public forma: FormGroup = new FormGroup({});
  public typeDocument: ItemList[] = [];
  public genero: ItemList[] = [];

  constructor(private router: Router, private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.typeDocument = TypeDocument;
    this.genero = Genero;
    this.createForm();
  }

  createForm() {
    this.forma = this._formBuilder.group({
      tipoDocumento: [null, [Validators.required]],
      numerodeDocumento: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(500)]],
      fechaExpedicion: ['', Validators.required],
      fechadeNacimiento: ['', Validators.required],
      genero: [null, [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      confirmarEmail: ['', [Validators.required, Validators.email]],
      pinEnviado: ['', Validators.required],
      confirmarPin: ['', Validators.required]
    }, {
      validator: this.validarEmailYPin
    });
  }

  validarEmailYPin(group: FormGroup) {
    const email = group.get('email')?.value;
    const confirmarEmail = group.get('confirmarEmail')?.value;
    const pinEnviado = group.get('pinEnviado')?.value;
    const confirmarPin = group.get('confirmarPin')?.value;

    if (email !== confirmarEmail) {
      group.get('confirmarEmail')?.setErrors({ 'emailNoCoincide': true });
    } else {
      group.get('confirmarEmail')?.setErrors(null);
    }

    if (pinEnviado !== confirmarPin) {
      group.get('confirmarPin')?.setErrors({ 'pinNoCoincide': true });
    } else {
      group.get('confirmarPin')?.setErrors(null);
    }

    return null;
  }

  mostrarPassword(pinControlName: string) {
    console.log(pinControlName)
    const pinField = this.forma.get(pinControlName);

    
    if (pinField instanceof HTMLInputElement) {
      pinField.type = pinField.type === 'password' ? 'text' : 'password';
    }
  }

  goBack() {
    this.router.navigate(['principalPage']);
  }

  onChangeTipoDocumento() {

  }
  confirm(){
    this.router.navigate(['principalPage']);
  }
}
