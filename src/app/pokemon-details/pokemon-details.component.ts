import { Component, Input } from '@angular/core';
import { Pokemon } from '../pokemon'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PokemondataService } from '../Services/pokemondata.service'

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent {

  @Input() pokemon?: Pokemon;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemondataService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pokemonService.getPokemonByID(id)
      .subscribe(pokemon => this.pokemon = pokemon);
  }
  
  save(): void {
    if (this.pokemon) {
      this.pokemonService.updatePokemon(this.pokemon)
        .subscribe(() => this.goBack());
    }
  }

  delete(): void {
    if (this.pokemon) {
      this.pokemonService.deletePokemon(this.pokemon.id)
        .subscribe(() => this.goBack());
    }
  }

  goBack(): void {
    this.location.back();
  }

}
