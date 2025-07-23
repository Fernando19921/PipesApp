import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';






@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public menuItems: MenuItem[] = [];
  constructor(){}

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Pipe De Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            routerLink:'/'
          },

          {
            label: 'Numeros',
            icon: 'pi pi-dollar',
            routerLink:'/numbers'
          },
          {
            label: 'No Comunes',
            icon: 'pi pi-globe',
            routerLink:'/uncommon'
          },
        ]
      },

      {
        label:'Pipes personalizados',
        icon: 'pipi-cog',
        items:[
          {
            label:'Custom Pipe',
            icon: 'pi pi-desktop',
            routerLink:'custom'
          }
        ]
      }
    ];
  }
}
