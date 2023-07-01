import { Component } from "@angular/core";
import { Character } from "../interfaces/character.interface";
import { DbzService } from "../services/dbz.service";

@Component({
  selector:'dbz-main-page',
  templateUrl:'./main-page.component.html'
})
export class mainPageComponent{

  constructor( private dbzService : DbzService) {
  }

  public get characters() : Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter( id : string):void{
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character : Character):void{
    this.dbzService.addCharacter(character);
  }



}
