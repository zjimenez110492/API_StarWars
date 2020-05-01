import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  

  constructor(private httpClient:HttpClient) { }
  
  obtenerTodasLasPersonas():Observable<any>
  {
    let respuesta = this.httpClient.get("/api/people");
    //console.log(respuesta); 
    return this.httpClient.get("/api/people");
  }
  /*  
  agregarPersona(persona:any)
  {
      let json= JSON.stringify(persona);
      let headers = new HttpHeaders().set('Content-Type','application/json');
      return this.httpClient.post("http://localhost:4200/persona",json,{headers:headers});
    
  */
  
  consultarUnica(identificador):Observable<any>
  {
    let respuesta=this.httpClient.get("/api/people/"+identificador+"/");
    //console.log(JSON.stringify(respuesta));
  return this.httpClient.get("/api/people/"+identificador+"/");
  }
}
