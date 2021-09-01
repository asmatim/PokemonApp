import { Component, OnInit } from '@angular/core';

import { Pokemon } from '../donnes-pokemons/pokemon';
import { PokemonService } from 'src/app/pokemons.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
})
export class DetailPokemonComponent implements OnInit {
  pokemon: any = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService
  ) {}

  /*ngOnInit(): void {
        let id = +this.route.snapshot.params.id;
        console.log(typeof(id));
        this.pokemon = this.pokemonService.getPokemon(id);
    }*/

  ngOnInit(): void {
    let id = +this.route.snapshot.params.id;
    console.log(typeof id);
    this.pokemonService.getPokemon(id).subscribe((pokemon) => (this.pokemon = pokemon));
  }

  goBack() {
    this.router.navigate(['/pokemon/all']);
  }

  geEdit(pokemon: Pokemon): void {
    let link = ['pokemon/edit', pokemon.id];
    this.router.navigate(link);
  }
}
