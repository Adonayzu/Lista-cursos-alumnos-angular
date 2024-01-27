import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaCursosComponent } from './componentes/tabla-cursos/tabla-cursos.component';
import { TablaAlumnosComponent } from './componentes/tabla-alumnos/tabla-alumnos.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaCursosComponent,
    TablaAlumnosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
