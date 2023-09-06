import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroRutaPage } from './registro-ruta.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroRutaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroRutaPageRoutingModule {}
