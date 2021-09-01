import { Component, OnInit } from "@angular/core";

import { PokemonService } from "src/app/pokemons.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Pokemon } from "../donnes-pokemons/pokemon";

@Component ({
    selector: 'create-pokemon',
    templateUrl: './create-pokemon.component.html',
})
export class CreatePokemonComponent implements OnInit {

    pokemon: any;

    constructor(private route: ActivatedRoute, private router: Router, private pokemonService: PokemonService) {
      this.pokemon = new Pokemon();
    }

    ngOnInit(): void {

    }
}
