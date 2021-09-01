import { Component, Input, OnInit } from "@angular/core";
import { PokemonService } from "src/app/pokemons.service";
import { Subject } from "rxjs";

// Importation d'angular le router pour les liens
import { Router } from "@angular/router";
import { debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";
import { Pokemon } from "../donnes-pokemons/pokemon";

@Component({
    selector: 'search-pokemons',
    templateUrl: './search-pokemons.component.html',

})

export class SearchPokemonComponent implements OnInit {

    // cette var est un observable
    private searchTerms = new Subject<string>();
    pokemons: any;

    constructor(private router: Router, private pokemonService: PokemonService) {
    }

    ngOnInit(): void {
      this.pokemons = this.searchTerms.pipe(
        // attendre 300ms de pause entre chaque requête
        debounceTime(300),
        // Ignorer la recherche en cours si la req est la précédente
        distinctUntilChanged(),
        // On retourne la liste des résultats correspondant aux termes de la recherche
        switchMap((term: string) => this.pokemonService.searchPokemon(term)),
      );
    }

    search(term: string): void {
      this.searchTerms.next(term);
    }

    goToDetail(pokemon: Pokemon): void {
      let link = ['/pokemon', pokemon.id];
      this.router.navigate(link);
    }
}
