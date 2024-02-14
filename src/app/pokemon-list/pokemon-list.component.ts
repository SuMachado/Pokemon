import { Component, OnInit, HostListener } from '@angular/core';
import { PokemondataService } from '../Services/pokemondata.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit{


  pokemons: Pokemon[] = [];
  page = 1;
  totalPokemons!: number;

  constructor(private pokemonDataService: PokemondataService) { }

  ngOnInit(): void {
    this.pokemonDataService.getPokemons()
      .subscribe((response: any) => {
        this.pokemons = response;
       
      });
  }

  add(name: string, height: number, weight: number,
    types: string[], family: string): void {
    name = name.trim();
    family = family.trim();

    if (!name || !height || !weight || !types || !family) { return; }
    this.pokemonDataService.addPokemon({ name, height, weight, types, family } as Pokemon)
      .subscribe(pokemon => {
        this.pokemons.push(pokemon);
      });

  }

  delete(pokemon: Pokemon): void {
    this.pokemons = this.pokemons.filter(p => p !== pokemon);
    this.pokemonDataService.deletePokemon(pokemon.id).subscribe(
      () => {
      // if success
      console.log('Pokemon successfully deleted.');
    },
      (error) => {
        // if error
        console.error('Error deleting Pokemon:', error);
      },
      () => {
        // when Observable is completed (optional)
        console.log('Deletion completed.');
      });
  }

  showScrollTopButton: boolean = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    
    this.showScrollTopButton = window.scrollY > 300;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}


