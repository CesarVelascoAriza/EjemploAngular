import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { VerPersonasComponent } from './components/ver-personas/ver-personas.component';
import { AePersonasComponent } from './components/ae-personas/ae-personas.component';
import { PersonasComponent } from './components/personas/personas.component';
import {HttpClientModule} from'@angular/common/http'



@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    VerPersonasComponent,
    AePersonasComponent,
    PersonasComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
