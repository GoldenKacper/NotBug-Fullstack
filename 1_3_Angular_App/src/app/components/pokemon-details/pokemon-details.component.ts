import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PokemonService} from '../../services/pokemon.service';
import {Pokemon} from '../../models/pokemon.model';
import {NgForOf, NgIf, TitleCasePipe, NgOptimizedImage} from '@angular/common';
import {MatChipsModule} from '@angular/material/chips';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.scss',
  imports: [
    TitleCasePipe,
    NgIf,
    MatChipsModule,
    NgForOf,
    MatTableModule,
    NgOptimizedImage,
    MatProgressSpinnerModule
  ],
})


export class PokemonDetailsComponent implements OnInit {
  pokemonName!: string;
  pokemon!: Pokemon;
  isLoading = false;
  error = '';

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) {
  }

  ngOnInit(): void {
    this.pokemonName = this.route.snapshot.paramMap.get('name')!;
    this.loadPokemonDetails();
  }

  loadPokemonDetails(): void {
    this.isLoading = true;
    this.pokemonService.getPokemonDetails(this.pokemonName).subscribe({
      next: (data) => {
        this.pokemon = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching Pokémon details:', error);
        this.error = 'Failed to load Pokémon details.';
        this.isLoading = false;
      },
    });
  }
}

