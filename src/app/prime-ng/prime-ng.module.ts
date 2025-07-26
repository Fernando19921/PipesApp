import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [],
  imports: [],
  exports: [
    MenuModule,
    MenubarModule,
    CardModule,
    FieldsetModule,
    PanelModule,
    ButtonModule,
    ToolbarModule,
    InputTextModule,
    TableModule
  ]
})
export class PrimeNgModule { }
