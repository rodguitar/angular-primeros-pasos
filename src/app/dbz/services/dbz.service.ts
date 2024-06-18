import { Injectable } from '@angular/core';
import { v4 as uuid } from "uuid";

import { Character } from '../interfaces/characters.interface';

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character []= [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },{
    id: uuid(),
    name: 'Gojku',
    power: 9500
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7000
  }];


  addCharacter(character:Character):void{

    const newCharacter: Character = { id: uuid(), ...character }

    this.characters.push(newCharacter);
  }

  // onDeleteIdMain(index: number):void{
  deleteCharacterById(id: string):void{
    this.characters = this.characters.filter(character => character.id!==id)
  }

}
