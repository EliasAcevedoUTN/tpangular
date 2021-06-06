import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { DondeEstamosComponent } from './componentes/donde-estamos/donde-estamos.component';
import { InstrumentoComponent } from './componentes/instrumento/instrumento.component';
import { DetalleInstrumentoComponent } from './componentes/detalle-instrumento/detalle-instrumento.component';
import { InstrumentosComponent } from './componentes/instrumentos/instrumentos.component';
import { BuscadorComponent } from './componentes/buscador/buscador.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DondeEstamosComponent,
    InstrumentoComponent,
    DetalleInstrumentoComponent,
    InstrumentosComponent,
    BuscadorComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
