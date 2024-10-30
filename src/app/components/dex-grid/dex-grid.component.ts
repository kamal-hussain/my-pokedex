import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'dex-grid',
  templateUrl: './dex-grid.component.html',
  styleUrls: ['./dex-grid.component.scss'],
})
export class DexGridComponent implements OnInit {
  title = 'Pokedex';
  pokemon: any = [];
  page: number = 1;
  totalNumber: any;
  limit: number = 105;
  term: any;
  selectedPokemon: any = null;

  filteredPokemon: any[] = [];

  constructor(private pokeApi: PokeApiService) {}

  ngOnInit() {
    this.getData();
    this.updateFilteredPokemon();
  }

  getData() {
    this.pokeApi.getPokemon(999999, 0).subscribe((res) => {
      this.totalNumber = res.count;
      this.pokemon = res.results;
    });
  }

  pageChange(input: any) {
    this.page = input;
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  onSearchChange() {
    this.page = 1;
    this.updateFilteredPokemon();
  }

  updateFilteredPokemon() {
    if (this.term) {
      this.filteredPokemon = this.pokemon.filter((item: any) =>
        item.name.toLowerCase().includes(this.term.toLowerCase())
      );
    } else {
      this.filteredPokemon = this.pokemon; // If no search term, show all Pokemon
    }
  }

  openModal(pokemon: any) {
    this.pokeApi.getPokemonDetails(pokemon.name).subscribe((details: any) => {
      this.selectedPokemon = details;
      this.updateFilteredPokemon();
    });
  }

  closeModal() {
    this.selectedPokemon = null;
  }
}
