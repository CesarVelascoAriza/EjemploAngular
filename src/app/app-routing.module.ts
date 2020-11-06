import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AePersonasComponent } from './components/ae-personas/ae-personas.component';
import { VerPersonasComponent } from './components/ver-personas/ver-personas.component';
import { PersonasComponent } from './components/personas/personas.component';
const routes: Routes = [
  {path:'agregar',component:AePersonasComponent},
  {path:'editar/:id',component:AePersonasComponent},
  {path:'ver/:id',component:VerPersonasComponent},
  {path:'',component:PersonasComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
