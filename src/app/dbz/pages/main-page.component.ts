import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/characters.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor(private dbzService: DbzService){

  }

  get characters(): Character[]{
    return [...this.dbzService.characters];
  }

  onDeleteMainCharacter(id:string): void {
    console.log(`MAIN Delete ${id}`);
    this.dbzService.deleteCharacterById(id);
    console.log(this.characters);
  }

  onNewMainCharacter(character: Character): void{
    this.dbzService.addCharacter(character);
  }

}
