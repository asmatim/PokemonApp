import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PokemonsComponent } from './pokemons/list-pokemons/pokemons.component';
import { PageNotFoundComponent } from './page-note-found-component';
import { DetailPokemonComponent } from './pokemons/detail-pokemon/detail-pokemon.component';
import { PokemonTypeColorPipe } from './pokemons/pipes/pokemon-type-color.pipe';
import { BorderCardDirective } from './pokemons/directives/border-card.directive';
import { BackgroundCardDirective } from './pokemons/directives/background-card.directive';
import { EditPokemonComponent } from './pokemons/edit-pokemon/edit-pokemon.component';
import { FormPokemonComponent } from './pokemons/edit-pokemon/form-pokemon.component';
import { SearchPokemonComponent } from "./pokemons/search-pokemons/search-pokemons.component";
import { FormsModule } from '@angular/forms';
import { PokemonRareteColorPipe } from "./pokemons/pipes/pokemon-rarete-color.pipe";
import { CreatePokemonComponent } from "./pokemons/create-pokemon/create-pokemon.component";

import { PokemonService } from './pokemons.service';

import { PokemonRoutingModule } from "./pokemons/pokemons-routing.module";
import { PokemonRareteStarsPipe } from "./pokemons/pipes/pokemon-rarete-stars.pipe";

@NgModule({
  declarations: [
    DetailPokemonComponent,
    EditPokemonComponent,
    CreatePokemonComponent,
    FormPokemonComponent,
    PokemonsComponent,
    SearchPokemonComponent,
    PokemonTypeColorPipe,
    PokemonRareteColorPipe,
    PokemonRareteStarsPipe,
    BorderCardDirective,
    BackgroundCardDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    PokemonRoutingModule
  ],
  providers: [
    PokemonService
  ],
  bootstrap: []
})
export class PokemonsModule{

}
