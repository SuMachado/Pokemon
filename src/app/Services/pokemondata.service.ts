import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { Pokemon } from '../pokemon';
import { catchError, map, takeUntil, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class PokemondataService {
  private pokemonUrl = `https://softwium.com/api/pokemons`;
  private allPokemons$: Observable<Pokemon[]>;
  private unsubscribe$ = new Subject<void>();

  constructor(private http: HttpClient) {
    this.allPokemons$ = this.getPokemonsFromApi();
  }

  private getPokemonsFromApi(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.pokemonUrl).pipe(
      map((pokemons: Pokemon[]) => {
        const filteredPokemons = pokemons.filter((pokemon, index, self) =>
          index === self.findIndex((p) => (
            p.id === pokemon.id
          ))
        );
        return filteredPokemons;
      }),
      catchError(this.handleError<Pokemon[]>('getPokemons', []))
    );
  }

  getPokemons(): Observable<Pokemon[]> {
    return this.allPokemons$;
  }

  searchPokemons(term: string): Observable<Pokemon[]> {
    console.log('Searching Pokemons:', term);
    return this.allPokemons$.pipe(
      map(pokemons => {
        term = term.toLowerCase();
        return pokemons.filter(p =>
          p.name.toLowerCase().includes(term) || // by name
          p.id.toString().includes(term) // by ID
        );
      }),
      catchError(this.handleError<Pokemon[]>('searchPokemons', [])),
      takeUntil(this.unsubscribe$)
    );
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

//export class PokemondataService {

//  constructor(private http: HttpClient) { }

//  private pokemonUrl = `https://softwium.com/api/pokemons`;

//  /** GET: get all the Pokemons on the server */
//  getPokemons(): Observable<Pokemon[]> {
//    return this.http.get<Pokemon[]>(this.pokemonUrl)
//      .pipe(
//        catchError(this.handleError<Pokemon[]>('getPokemons', []))
//      );
//  }


//  /* GET Pokemons whose name contains search term */
//  searchPokemons(term?: string): Observable<Pokemon[]> {
//    return this.http.get<Pokemon[]>(this.pokemonUrl).pipe(
//      map(pokemons => (term ? pokemons.filter(p => p.name.toLowerCase().includes(term.toLowerCase())) : pokemons)),
//      catchError(this.handleError<Pokemon[]>('searchPokemons', []))
//    );
//  }

  get20Pokemons(): Observable<Pokemon[]> {
    const url = `${this.pokemonUrl}/pokemons?limit=20`;
    return this.http.get<Pokemon[]>(url)
      .pipe(
        catchError(this.handleError<Pokemon[]>('get20Pokemons', []))
      );
  }

  /** GET: get the specific Pokemon with that given id on the server */
  getPokemonByID(id: number): Observable<Pokemon> {
    const url = `${this.pokemonUrl}/${id}`;
    return this.http.get<Pokemon>(url)
      .pipe(
        catchError(this.handleError<Pokemon>(`getPokemon id=${id}`))
    );

  }

  /** PUT: update the Pokemon on the server */
  updatePokemon(pokemon: Pokemon): Observable<any> {
    console.log(pokemon)
    return this.http.put(this.pokemonUrl + '/' + pokemon.id, pokemon, this.httpOptions).pipe(
      catchError(this.handleError<any>('updatePokemon'))
    );
  }


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  /** POST: add a new Pokemon to the server */
  addPokemon(pokemon: Pokemon): Observable<Pokemon> {
    return this.http.post<Pokemon>(this.pokemonUrl, pokemon, this.httpOptions).pipe(      
      catchError(this.handleError<Pokemon>('addPokemon'))
    );
  }

  /** DELETE: delete the Pokemon from the server */
  deletePokemon(id: number): Observable<Pokemon> {
    const url = `${this.pokemonUrl}/${id}`;

    return this.http.delete<Pokemon>(url, this.httpOptions).pipe(
      catchError(this.handleError<Pokemon>('deletePokemon'))
    );
  }


  /**
* Handle Http operation that failed.
* Let the app continue.
*
* @param operation - name of the operation that failed
* @param result - optional value to return as the observable result
*/
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

