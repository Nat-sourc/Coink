import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule,Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Genero } from "../../../localist/locallist";
import { ItemIdentify, ItemList } from "../../../model/local/item-list";
import { ServiceIdentifyService } from '../../../service/service-identify.service';
import Swal from 'sweetalert2';

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
  public typeDocument: ItemIdentify[] = [];
  public genero: ItemList[] = [];
  mostrarPin: boolean = false;

  constructor(private router: Router, private _formBuilder: FormBuilder,private _identifyService: ServiceIdentifyService,) { }

  ngOnInit(): void {
    this.genero=Genero;
    this.getTypeIdentify();
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

  getTypeIdentify(){
    this._identifyService.getByTypeIdentify(  )
      .subscribe({
        next: (data) =>{ this.showTypeIdentify( data )},
        error:(error) => {this.displayError( error )}
      }) ;

  }
  showTypeIdentify(datos: any){
    this.typeDocument = datos;
    
  
  }

  displayError(e: Error){
    Swal.fire({icon: 'error', title: 'Oops...', text: 'Se ha presentado el error:' + e.stack + e.message, footer: 'contacte al administrador'});
    
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

  mostrarPassword() {
    this.mostrarPin = !this.mostrarPin;
  }

  goBack() {
    this.router.navigate(['principalPage']);
  }

  onChangeTipoDocumento() {

  }
  confirm(){
    const numeroDocumento = this.forma.get('numerodeDocumento')?.value;
    this.router.navigate(['stepFinally/' + numeroDocumento]);
  }
}
