import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TellevoPageRoutingModule } from './tellevo-routing.module';

import { TellevoPage } from './tellevo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TellevoPageRoutingModule
  ],
  declarations: [TellevoPage]
})
export class TellevoPageModule {}
