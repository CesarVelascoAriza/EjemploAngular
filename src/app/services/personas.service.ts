import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from'@angular/common/http'
import { Observable } from 'rxjs';
import {Personas} from'../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  myUrlbase ='http://localhost:8080/'
  myUrlApi='';
  httpOptions={
    headers:new HttpHeaders({
      'Content-type':'application/json'
    })
  }

  constructor(private http:HttpClient) { }

  getListPersonas():Observable<Personas[]>{
    return this.http.get<Personas[]>(this.myUrlbase);
  }
  deletePersonas(id: number):Observable<Personas>{
    return this.http.delete<Personas>(this.myUrlbase+id);
  }
  guardarPersona(persona:Personas):Observable<Personas>{
    return this.http.post<Personas>(this.myUrlbase,persona,this.httpOptions);
  }
  cargarPersonas(id: Number):Observable<Personas>{
    console.log(id);
    return this.http.get<Personas>(this.myUrlbase+id);
  }

  actualizarPersona(persona:Personas, id: number):Observable<Personas>{
      return this.http.put<Personas>(this.myUrlbase+id,persona,this.httpOptions);
  }
}
