import { Component, OnInit,Input } from '@angular/core';
import { CallcenterService,Registro } from 'src/app/service/callcenter.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  @Input() modiicar:any;
  ListaRegistro:Registro[]=[];
  constructor(private conexionRegistro:CallcenterService,private router:Router ) 
  { }

  ngOnInit(): void {
    this.ListaRegistro = this.conexionRegistro.getRegisto();
  }
  eliminar(id:number){
    console.log('eliminardo: '+id)
    this.conexionRegistro.deleteRegistro(id);
  }

  modificar(id:number){
    this.modiicar = id;
    console.log("ID: ",id);
    this.conexionRegistro.modificar.emit(this.modiicar);
    this.router.navigate(['/modificar']);
  } 
}
