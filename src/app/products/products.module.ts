import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPagesComponent } from './pages/numbers-pages/numbers-pages.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { ProductsRoutingModule } from './products-routing.module';
import { PanelModule } from "primeng/panel";
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { OrderComponent } from './pages/order/order.component';
import { ToggleCasePipe } from './pipes/togle-case.pipe';



@NgModule({
  declarations: [
    BasicsPageComponent,
    NumbersPagesComponent,
    UncommonPageComponent,
    OrderComponent,
    //Pipes
    ToggleCasePipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PanelModule,
    PrimeNgModule,
    CommonModule
]
})
export class ProductsModule { }
