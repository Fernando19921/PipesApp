import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Color, Hero } from '../../interfaces/hero.interface';




@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
})
export class OrderComponent  {
  public isUpperCase:boolean=false;

  public heroes:Hero[]=[
    {
      name:'SuperMan',
      canFly:true,
      color:Color.blue
    },
    {
      name:'Batman',
      canFly:false,
      color:Color.black
    },
    {
      name:'Mujer Maravilla',
      canFly:false,
      color:Color.red
    }
  ]


  toggleUpperCase():void{
    this.isUpperCase=!this.isUpperCase;
  }

}
