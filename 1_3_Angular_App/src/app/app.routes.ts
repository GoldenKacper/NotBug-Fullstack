import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';

export const routes: Routes = [
  { path: '', redirectTo: 'pokemons', pathMatch: 'full' }, // Added redirect for empty path
  { path: 'pokemons', component: PokemonListComponent },
  { path: 'pokemons/:name', component: PokemonDetailsComponent },
  { path: '**', redirectTo: 'pokemons' }, // Redirect unknown routes to the list
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
