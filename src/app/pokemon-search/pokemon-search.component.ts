import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Pokemon } from '../pokemon';
import { PokemondataService } from '../Services/pokemondata.service';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css']
})
export class PokemonSearchComponent implements OnInit {
  pokemons$!: Observable<Pokemon[]>;
  private searchTerms = new Subject<string>();

  constructor(private pokemonService: PokemondataService) { }

  // Push a search term into the observable stream.
  search(term: string): void {
    console.log('Searching Pokemons:', term);
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.pokemons$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.pokemonService.searchPokemons(term)),
    );
  }
}
