import {Component, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {PokemonService} from '../../services/pokemon.service';
import {PokemonListItem} from '../../models/pokemon.model';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {NgForOf, NgIf, TitleCasePipe} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatGridListModule,
    MatCardModule,
    MatProgressBarModule,
    FormsModule,
    RouterLink,
    NgIf,
    NgForOf,
    MatInputModule,
    TitleCasePipe,
    InfiniteScrollModule,
    NgOptimizedImage,
  ],
})


export class PokemonListComponent implements OnInit {
  pokemonList: PokemonListItem[] = [];
  offset = 0;
  limit = 20;
  isLoading = false;
  searchTerm: string = '';
  cols: number = 4;

  constructor(private pokemonService: PokemonService, private breakpointObserver: BreakpointObserver) {
  }

  ngOnInit(): void {
    this.loadPokemonList();
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe((result) => {
      this.cols = result.matches ? 2 : 4;
    });
  }

  loadPokemonList(): void {
    this.isLoading = true;
    this.pokemonService.getPokemonList(this.offset, this.limit).subscribe({
      next: (data) => {
        this.pokemonList = [...this.pokemonList, ...data.results];
        this.offset += this.limit;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching Pokémon list:', error);
        this.isLoading = false;
      },
    });
  }

  onScroll(): void {
    if (!this.isLoading) {
      this.loadPokemonList();
    }
  }

  get filteredPokemonList(): PokemonListItem[] {
    if (!this.searchTerm) {
      return this.pokemonList;
    }
    return this.pokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  getPokemonImage(url: string): string {
    const id = url.split('/').filter(Boolean).pop();
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }
}

