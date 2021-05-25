import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Personas } from 'src/app/models/persona';
import { PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-ae-personas',
  templateUrl: './ae-personas.component.html',
  styleUrls: ['./ae-personas.component.css']
})
export class AePersonasComponent implements OnInit {

  persona :FormGroup;
  personaid =0;
  accion ="agregar";
  personasn :Personas;

  constructor(private fb:FormBuilder, private route:ActivatedRoute,private servicePersona:PersonasService, private router:Router) {

    this.persona =this.fb.group({
        id :['',Validators.required],
        nombre:['',Validators.required],
        apellido:['',Validators.required]
    });

    if(+this.route.snapshot.paramMap.get('id')>0){
      this.personaid = +this.route.snapshot.paramMap.get('id');
    }
   }

  ngOnInit(): void {

    this.editar();
  }
  guardarPersonasFormulario(){
    console.log(this.persona);
     if(this.accion === 'agregar') {
       const p:Personas={
        id:this.persona.get('id').value,
        nombre:this.persona.get('nombre').value,
        apellido:this.persona.get('apellido').value
       };
       this.servicePersona.guardarPersona(p).subscribe(data=>{
          this.router.navigate(['/']);
       })

     }else{
      const p:Personas={
        id:this.persona.get('id').value,
        nombre:this.persona.get('nombre').value,
        apellido:this.persona.get('apellido').value
       };
       this.servicePersona.actualizarPersona(p,this.personaid).subscribe(data=>{
          this.router.navigate(['/']);
       })
     }


  }
  editar(){

    if(this.personaid>0){
      this.accion="Editar";
      this.servicePersona.cargarPersonas(this.personaid).subscribe(data=>{
        this.personasn= data;
        this.persona.patchValue({
          id:data.id,
          nombre:data.nombre,
          apellido:data.apellido
        })
      })

    }
  }
}
