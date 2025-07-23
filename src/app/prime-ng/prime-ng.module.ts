import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [],
  imports: [],
  exports:[
    MenuModule,
    MenubarModule,
    CardModule,
    FieldsetModule,
    PanelModule,
    ButtonModule
  ]
})
export class PrimeNgModule { }

