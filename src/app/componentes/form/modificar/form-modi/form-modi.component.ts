import { Component, OnInit } from '@angular/core';
import { CallcenterService,Registro } from 'src/app/service/callcenter.service';
@Component({
  selector: 'app-form-modi',
  templateUrl: './form-modi.component.html',
  styleUrls: ['./form-modi.component.css']
})
export class FormModiComponent implements OnInit {

  id_entrada:number=0;
  cargar:any=[];
  ListaRegistro:Registro={
    codigo_registro:0,
    fecha:'',
    cliente:'',
    tipo_iteracion:'',
    descripcion:''
}
constructor(private conexionRegistro:CallcenterService) {
 
  
 }

  ngOnInit(): void {
    this.Carga();
  }

  Carga(){
    this.conexionRegistro.modificar.subscribe(data=>{
      console.log('envia'+data);
      this.cargar= this.conexionRegistro.getUnRegistro(data);
      console.log(this.cargar);
    })
  }
}
