import { Component, OnInit } from '@angular/core';
import {Personas} from'../../models/persona';
import {PersonasService} from'../../services/personas.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  listarPersonas:Personas[];
  constructor(private personaService:PersonasService) { }

  ngOnInit(): void {
    this.cargarpersonas();
  }

  cargarpersonas(){
    this.personaService.getListPersonas().subscribe(data=>{
      this.listarPersonas =data;
    });
  }
  borrarPersona(id:number){
    this.personaService.deletePersonas(id).subscribe(data=>{
      this.cargarpersonas();
    })
  }
}
