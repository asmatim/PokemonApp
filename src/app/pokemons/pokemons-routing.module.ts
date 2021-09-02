import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsComponent } from './list-pokemons/pokemons.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { CreatePokemonComponent } from './create-pokemon/create-pokemon.component';
import { AuthGuard } from '../authentication/auth-guard.service';

/*const pokemonRoutes: Routes = [
  { path: 'pokemon/all', component: PokemonsComponent },
  { path: 'pokemon/:id', component: DetailPokemonComponent },
  { path: 'pokemon/edit/:id', component: EditPokemonComponent },
];*/

const pokemonRoutes: Routes = [
  {
    path: 'pokemon',
    children:[
      { path: 'all', component: PokemonsComponent },
      { path: 'create', component: CreatePokemonComponent },
      { path: 'edit/:id', component: EditPokemonComponent },
      { path: ':id', component: DetailPokemonComponent }
    ],
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(pokemonRoutes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
