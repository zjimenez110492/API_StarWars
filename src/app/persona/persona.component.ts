import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../servicio/persona.service'
import {FormsModule}from '@angular/forms' 
@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  
  agregarPersonaRegistro: any={Nombre:'', Apellido:'', Edad:''};
  personas:any;
  constructor(private personaService:PersonaService) { }
  ngOnInit() {
  }


  eliminarPersona(identificador:number)
  {
    console.log("Eliminar");
  }
  agregarPersona(identificador:number)
  {
    console.log("Agregando: Nombre:"+this.agregarPersonaRegistro.Nombre+"  "+this.agregarPersonaRegistro.Apellido+"  de  "+this.agregarPersonaRegistro.Edad+"  años de edad");
  }

}
