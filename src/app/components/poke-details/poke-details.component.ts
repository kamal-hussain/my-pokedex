import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PokeApiService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'app-poke-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './poke-details.component.html',
  styleUrl: './poke-details.component.scss',
})
export class PokeDetailsComponent {
  pokemonName: string = '';
  pokemonDetails: any;

  constructor(private route: ActivatedRoute, private pokeApi: PokeApiService) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.pokemonName = params['name'];
      this.loadPokemonDetails();
    });
  }

  loadPokemonDetails() {
    this.pokeApi
      .getPokemonDetails(this.pokemonName)
      .subscribe((details: any) => {
        this.pokemonDetails = details;
      });
  }
}
