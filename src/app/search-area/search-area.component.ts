import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemondataService } from '../Services/pokemondata.service';


@Component({
  selector: 'app-search-area',
  templateUrl: './search-area.component.html',
  styleUrls: ['./search-area.component.css']
})
export class SearchAreaComponent implements OnInit {
  constructor(private pokemonService: PokemondataService) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(): void {
    this.pokemonService.getPokemons()
      .subscribe();
  }
}
