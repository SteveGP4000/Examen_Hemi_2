import { Component, OnInit } from '@angular/core';
import { CallcenterService,Registro } from 'src/app/service/callcenter.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {


  ListaRegistro:Registro[]=[];
  constructor(private conexionRegistro:CallcenterService,private router:Router ) 
  { }

  ngOnInit(): void {
    this.ListaRegistro = this.conexionRegistro.getRegisto();
  }
}
