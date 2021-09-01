import { Component, OnInit } from "@angular/core";

import { PokemonService } from "src/app/pokemons.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component ({
    selector: 'edit-pokemon',
    templateUrl: './edit-pokemon.component.html',
})
export class EditPokemonComponent implements OnInit {


    pokemon: any = null;

    constructor(private route: ActivatedRoute, private router: Router, private pokemonService: PokemonService) {

    }

    ngOnInit(): void {
      let id = +this.route.snapshot.params.id;
      this.pokemonService.getPokemon(id).subscribe(pokemon => this.pokemon = pokemon);
    }
}
