import { Component, OnInit } from '@angular/core';
import { CallcenterService,Registro } from 'src/app/service/callcenter.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  ListaRegistro:Registro={
      codigo_registro:0,
      fecha:'',
      cliente:'',
      tipo_iteracion:'',
      descripcion:''
  }

  constructor(private conexionRegistro:CallcenterService) { }

  ngOnInit(): void {
  }

  agregarRegistro(){
    this.conexionRegistro.addRegistro(this.ListaRegistro);
    console.log(this.ListaRegistro);
  }    
}
