import { Component } from '@angular/core';
import { PokemondataService } from '../Services/pokemondata.service';
import { Location } from '@angular/common';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrls: ['./add-pokemon.component.css']
})
export class AddPokemonComponent {
  constructor(
    private pokemonDataService: PokemondataService,
    private location: Location) { }

  newPokemon: Pokemon = {
    id: 0,
    name: '',
    height: 0,
    weight: 0,
    types: [],
    family: ''
  };
  successMessage: string = '';


  addPokemon(): void {
    if (this.newPokemon) {
      this.pokemonDataService.addPokemon(this.newPokemon).subscribe(
        (pokemon) => {
          this.successMessage = 'Pokemon successfully added.';
          console.log(pokemon);
          this.newPokemon.name = "";
          this.newPokemon = {
            id: 0,
            name: '',
            height: 0,
            weight: 0,
            types: [],
            family: ''
          };
        },
        (error) => {
          console.error('Error adding Pokemon:', error);
          this.successMessage = '';
        }
      
      );
    }
  }
  goBack(): void {
    this.location.back();
  }
}
