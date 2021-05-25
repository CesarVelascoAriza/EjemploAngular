import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Personas } from 'src/app/models/persona';
import { PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-ver-personas',
  templateUrl: './ver-personas.component.html',
  styleUrls: ['./ver-personas.component.css']
})
export class VerPersonasComponent implements OnInit {

  personauna : Personas;
  personaid:Number;
  constructor(private personaService:PersonasService,private route:ActivatedRoute) {
    this.personaid = +this.route.snapshot.paramMap.get('id');

  }

  ngOnInit(): void {
    this.cargarPersona();
  }

  cargarPersona(){
    this.personaService.cargarPersonas(this.personaid).subscribe(data=>{
      console.log(data);
      this.personauna=data;
    })
  }
}
