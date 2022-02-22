import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteEnLineaComponent } from './componente-en-linea/componente-en-linea.component';
import { MarcadorComponent } from './marcador/marcador.component';
import { EquipoComponent } from './equipo/equipo.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteEnLineaComponent,
    MarcadorComponent,
    EquipoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
