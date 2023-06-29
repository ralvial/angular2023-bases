import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames:string[]=['Spiderman',  'Ironman', 'She Hulk',  'Thor',  'Hulk'];
  public heroeBorrado?:string = '';

  borrarHeroe():void{
    this.heroeBorrado = this.heroNames.pop();
  }





}
