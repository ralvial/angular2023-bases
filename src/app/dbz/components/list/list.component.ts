import { EventEmitter, Output } from '@angular/core';
import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public deleteCharacter: EventEmitter<string> = new EventEmitter();
  public _deleteCharacter = new EventEmitter<number>(); //! Otra forma

  @Input()
  public characterList : Character[] = [
    {
      name:'Trunk',
      power:10,
    }];


  onDeleteCharacter(id?: string):void{
    //TODO: Id del personaje
    if (!id) return;

    console.log( {id} );
    this.deleteCharacter.emit( id );
  }
}
