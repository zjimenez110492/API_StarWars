import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../servicio/persona.service'
@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
  
})
export class PersonaComponent implements OnInit {
  
  agregarPersonaRegistro: any={
    name:'',
    height:'',
    mass:'',
    hair_color:'',
    skin_color:'',
    eye_color:'',
    birth_year:'',
    gender:'',
    homeworld:'',
    films:[],
    species:[],
    vehicles:[],
    starships:[],
    created:'',
    edited:'',
    url:'',};
  personas:any;
  persona:any;
  identificador:Text;
  constructor(private personaService:PersonaService) 
  { 
    this.personaService.obtenerTodasLasPersonas().subscribe(resultado=>{
      this.personas=resultado.results;
    },
      error=>{
          console.log(JSON.stringify(error));
      });
  }
  ngOnInit() {
  }


  consultarUnica()
  {
    this.personaService.consultarUnica(this.identificador).subscribe(resultado=>{
      this.persona=resultado;
      console.log("Nombre:  "+this.persona.name+"  creado:  "+this.persona.created );
    },
      error=>{
          console.log(JSON.stringify(error));
      });
  }
  

}
