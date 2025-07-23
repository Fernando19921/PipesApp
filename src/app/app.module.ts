import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';


//Configuración del local app

// Importa los datos de localización para español de México (es-MX)
import localeEsMX from '@angular/common/locales/es-MX';
import localeFrCA from '@angular/common/locales/fr-CA';
import localeEnUS from '@angular/common/locales/en'
// Función de Angular que permite registrar datos de localización personalizados
import { CommonModule, registerLocaleData } from '@angular/common';

// Registra los datos de localización para que Angular use el formato regional de México
registerLocaleData(localeEsMX);
registerLocaleData(localeFrCA);
registerLocaleData(localeEnUS);


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RatingModule,
    FormsModule,
    SharedModule,
    BrowserAnimationsModule,
    RouterModule,
    CommonModule
  ],
  providers: [
    provideClientHydration(),
   // {provide:LOCALE_ID, useValue:'en-US'} //si activo esto todo sera en formato de mexico
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
