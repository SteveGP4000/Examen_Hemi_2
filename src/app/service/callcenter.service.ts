import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CallcenterService {
  @Output() modificar: EventEmitter<any> = new EventEmitter();
  constructor() { 
  }
  Registro:Registro []=[{
      codigo_registro:1,
      fecha:'2023-12-31',
      cliente:'Cliente',
      tipo_iteracion:'0984332923',
      descripcion:'Servicio'
  },
  {
   
      codigo_registro:2,
      fecha:'2022-02-15',
      cliente:'Cliente',
      tipo_iteracion:'0978541236',
      descripcion:'Compra'
  },
  {
   
      codigo_registro:3,
      fecha:'2022-04-19',
      cliente:'Cliente',
      tipo_iteracion:'0987536482',
      descripcion:'Servicio'
  },
  {
   
      codigo_registro:4,
      fecha:'2023-03-15',
      cliente:'Cliente',
      tipo_iteracion:'0951234683',
      descripcion:'Compra'
  },
  {
   
      codigo_registro:5,
      fecha:'2022-12-25',
      cliente:'Cliente',
      tipo_iteracion:'0978452182',
      descripcion:'Servicio'
  },
  {
   
      codigo_registro:6,
      fecha:'2022-11-30',
      cliente:'Cliente',
      tipo_iteracion:'0978563297',
      descripcion:'Compra'
  },
  {
   
      codigo_registro:7,
      fecha:'2023-01-15',
      cliente:'Cliente',
      tipo_iteracion:'0963215689',
      descripcion:'Servicio'
  },
  {
   
      codigo_registro:8,
      fecha:'2022-06-28',
      cliente:'Cliente',
      tipo_iteracion:'0987563569',
      descripcion:'Compra'
  },
  {
   
      codigo_registro:9,
      fecha:'2023-02-06',
      cliente:'Cliente',
      tipo_iteracion:'0987456328',
      descripcion:'Servicio'
  },
  {
   
      codigo_registro:10,
      fecha:'2022-03-26',
      cliente:'Cliente',
      tipo_iteracion:'0951598756',
      descripcion:'Compra'
  }]
  getRegisto(){return this.Registro;}

  getUnRegistro(codigo_registro:number):Registro[]{
    let registros = this.getRegisto();
    let registro = registros.filter(item => item.codigo_registro === codigo_registro )
    return registro;
  }
  
  addRegistro (Registro:Registro){
    this.Registro.push(Registro);
  }
    
  deleteRegistro(id:number){
    let registro = this.Registro.findIndex(item => item.codigo_registro === id )
    if (registro >= 0) {
      this.Registro.splice(registro, 1);
    }else{
      console.log("No existe mas elementos")
    }
  }
  modificarObjeto = (id: number, Registro:Registro) => {
    let registro = this.Registro.findIndex(item => item.codigo_registro === id );
    if (registro >= 0) {
      this.Registro.splice(registro, 1, Registro);
    }
  }

}
export interface Registro {
  codigo_registro:number,
  fecha:string,
  cliente:string,
  tipo_iteracion:string,
  descripcion:string
}
