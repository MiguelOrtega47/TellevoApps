import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroRutaPageRoutingModule } from './registro-ruta-routing.module';

import { RegistroRutaPage } from './registro-ruta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroRutaPageRoutingModule
  ],
  declarations: [RegistroRutaPage]
})
export class RegistroRutaPageModule {}
