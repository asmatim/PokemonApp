import { Inject, Injectable } from '@angular/core';
import { Pokemon } from './pokemons/donnes-pokemons/pokemon';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class PokemonService {

  constructor(private http: HttpClient) {}

  private pokemonUrl = 'api/pokemons';


  // Retourne tous les pokémons
  /*getPokemons2(): Pokemon[] {
    return POKEMONS;
  }*/

  private log(log: string) {
    console.log(log);
  }

  private handleError<T>(operation = 'operation', result? : T) {
    return (error: any): Observable<T> => {
      console.log(error);
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    }
  }

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.pokemonUrl).pipe(
      tap(_=> this.log(`fetched pokemons`)),
      catchError(this.handleError(`getPokemons`, []))
    );
  }

  getPokemon(id: number): Observable<Pokemon> {
    const url = `${this.pokemonUrl}/${id}`;

    return this.http.get<Pokemon>(url).pipe(
      catchError(this.handleError<Pokemon>(`getPokemon id = ${id} non trouvé`))
    );
  }

  addPokemon(pokemon: Pokemon): Observable<Pokemon> {
    pokemon.id = null;

    const httpOptions ={
      headers: new HttpHeaders({'Content-type': 'application/json'})
    };

    return this.http.post<Pokemon>(this.pokemonUrl, pokemon, httpOptions).pipe(
      tap(_=> this.log(`added pokemon id=${pokemon.id}`)),
      catchError(this.handleError<any>(`Ajout pokemon non fonctionnel`))
    );
  }

  editPokemon(pokemon: Pokemon): Observable<Pokemon> {
    const url = `${this.pokemonUrl}/${pokemon.id}`;

    return this.http.put<Pokemon>(url, pokemon).pipe(
      catchError(this.handleError<Pokemon>(`Erreur update pokemon id : ${pokemon.id}`))
    );
  }

  updatePokemon(pokemon: Pokemon): Observable<Pokemon> {
    const httpOptions ={
      headers: new HttpHeaders({'Content-type': 'application/json'})
    };

    return this.http.put<Pokemon>(this.pokemonUrl, pokemon, httpOptions).pipe(
      tap(_=> this.log(`updated pokemon id=${pokemon.id}`)),
      catchError(this.handleError<any>(`update pokemon non fonctionnel`))
    );
  }

  searchPokemon(term: string): Observable<Pokemon[]> {
    if (!term.trim) {
      return of([]);
    }

    return this.http.get<Pokemon[]>(`${this.pokemonUrl}/?name=${term}`).pipe(
      tap(_=> this.log(`found pokemons matching "${term}"`)),
      catchError(this.handleError(`searchPokemons`, []))
    )
  }

  // Retourne le pokémon avec l'identifiant passé en param
  /*getPokemon(id: number) {
    let pokemons = this.getPokemons2();

    for (let i = 0; i < pokemons.length; i++) {
      if(pokemons[i].id === id) {
          return pokemons[i];
      }
    }
    return 'false';
  }*/

  getPokemonTypes(): string[] {
    return ['Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrick', 'Poison', 'Fée', 'Vol'];
  }
}
