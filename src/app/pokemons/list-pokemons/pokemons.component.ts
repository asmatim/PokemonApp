import { Component, OnInit } from "@angular/core";

import { Pokemon } from "../donnes-pokemons/pokemon";
import { PokemonService } from "src/app/pokemons.service";


// Importation d'angular le router pour les liens
import { Router } from "@angular/router";

@Component({
    selector: 'list-pokemons',
    templateUrl: './pokemons.component.html',

})

export class PokemonsComponent implements OnInit {

    pokemons: Pokemon[];

    constructor(private router: Router, private pokemonService: PokemonService) {
        this.pokemons = [];
    }

    ngOnInit(): void {
        this.pokemonService.getPokemons().subscribe(pokemons => this.pokemons = pokemons);
    }

    selectPokemon(pokemon: Pokemon) {
        let link = ['/pokemon', pokemon.id];
        this.router.navigate(link);
    }
}
