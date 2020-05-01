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
    return this.httpClient.get("http://localhost:4200/persona");
  }
  agregarPersona(persona:any)
  {
      let json= JSON.stringify(persona);
      let headers = new HttpHeaders().set('Content-Type','application/json');
      return this.httpClient.post("http://localhost:4200/persona",json,{headers:headers});
  }
  eliminarPersona(identificador):Observable<any>
  {
  return this.httpClient.delete("http://localhost:4200/persona/"+identificador);
  }
}
