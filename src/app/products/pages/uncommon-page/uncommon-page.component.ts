import { Component } from '@angular/core';
import { rejects } from 'assert';
import { resolve } from 'path';
import { interval, Observable, take, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
  //** i18n Select
  public name: string = 'Fernando';
  public gender: 'male' | 'female' = 'male';

  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  };
  //constructor

  //Metodos
  changeClient(): void {
    this.name = 'Elisa';
    this.gender = 'female';
  }


  //**i18nPlural
  public client:string[]=['Maria','Edurado','Fernando','Carlos','Martin','Ivan']

  public clientMap={
    '=0':'No Tenemos ningun cliente esperando.',
    '=1':'Tenemos un cliente esperando.',
    'other':'Tenemos # clientes esperando.'
  }

  deletClient():void{
    this.client.shift();
  }

  //**KeyValue Pipe
  public person={
    name:'Fernando',
    age:20,
    address:'Japon'
  }
  //Async-Pipe

public myObservableTimer = interval(2000).pipe(
  take(1) // emite solo una vez
);

public promiseValue:Promise<string>=new Promise((resolve,rejects)=>{
  setTimeout(()=>{
    resolve('Tenemos data en la promesa')
  },3000)

})

}

