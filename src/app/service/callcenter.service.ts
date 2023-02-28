import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CallcenterService {

  constructor() { 
  }
  Registro:Registro []=[{
      codigo_registro:1,
      fecha:'2023-12-31',
      cliente:'Cliente',
      tipo_iteracion:'0984332923',
      descripcion:'sss'
  }]
}
export interface Registro {
  codigo_registro:number,
  fecha:string,
  cliente:string,
  tipo_iteracion:string,
  descripcion:string
}
