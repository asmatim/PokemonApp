import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PokemonService } from "src/app/pokemons.service";

@Component({
  selector: 'form-pokemon',
  templateUrl: './form-pokemon.component.html',
})
export class FormPokemonComponent implements OnInit {

  @Input() pokemon: any;

  types: any = [];

  constructor(private route: ActivatedRoute, private router: Router, private pokemonService: PokemonService ) {

  }

  ngOnInit() {
    this.types = this.pokemonService.getPokemonTypes();
  }

  onSubmit(): void {
    // si id pokemon non null et >0 => entrer en mode update
    if(this.pokemon.id) {
      this.updatePokemon();
    } else {
      this.addPokemon();
    }

  }

  addPokemon(): void {
    this.pokemonService.addPokemon(this.pokemon).subscribe(response => {
      // ajout pokémon réussi / récuperer le nouveau id pour la redirection
      console.log(response);
      this.pokemon = response;
      let link = ['/pokemon', this.pokemon.id];
      this.router.navigate(link);
    });
  }

  updatePokemon(): void {
    let link = ['/pokemon', this.pokemon.id];
    this.pokemonService.updatePokemon(this.pokemon).subscribe(response => console.log('it work'));
    this.router.navigate(link);
  }

  // méthose appelé lorsque l'utilisateur ajoutte ou retire un type au pokémon
  selectType($event: any, type: string) {
    let checked = $event.target.checked;
    if(checked) {
      this.pokemon.types.push(type);
    } else {
      let index = this.pokemon.type.indexOf(type);
      if(index > -1) {
        this.pokemon.type.splice(index, 1);
      }
    }
  }

  // Détermine si le type passé en paramètre appartient ou nn au pokémon
  hasType(type: string): boolean {
    //console.log(this.pokemon);
    let index = this.pokemon.types.indexOf(type);
    if(index > -1) return true;
    return false;
  }

  // si le type est valid pour chaque pokémon
  isTypesValid(type: string): boolean {
    if(this.pokemon.types.length === 1 && this.hasType(type)) {
      return false;
    }
    if(this.pokemon.types.length >= 3 && !this.hasType(type)) {
      return false;
    }

    return true;
  }

}
