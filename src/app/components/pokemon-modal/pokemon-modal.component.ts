import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { PokeApiService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'app-pokemon-modal',
  templateUrl: './pokemon-modal.component.html',
  styleUrls: ['./pokemon-modal.component.scss'],
})
export class PokemonModalComponent implements OnInit, OnDestroy {
  @Input() pokemon: any;
  @Input() filteredPokemon: any[] = [];
  @Input() pokemonSpecies: any;
  @Output() close = new EventEmitter<void>();
  @Output() next = new EventEmitter<void>();
  @Output() previous = new EventEmitter<void>();

  lastPokemonId!: number;
  currentIndex: number = 0;

  private extractIdFromUrl(url: string): number {
    const parts = url.split('/');
    return parseInt(parts[parts.length - 2], 10);
  }

  constructor(private pokeApi: PokeApiService) {}

  ngOnInit() {
    this.getSpecies();
    this.findLastPokemonId();

    document.body.classList.add('modal-open');

    this.currentIndex = this.filteredPokemon.findIndex(
      (p) => p.name === this.pokemon.name
    );

    console.log('Current Index:', this.currentIndex);
  }

  ngOnDestroy() {
    document.body.classList.remove('modal-open');
  }

  findLastPokemonId() {
    this.pokeApi.getPokemon(20000, 0).subscribe((res: any) => {
      const allPokemon = res.results;
      let highestId = 0;

      allPokemon.forEach((pokemon: any) => {
        const id = this.extractIdFromUrl(pokemon.url);
        if (id > highestId) {
          highestId = id;
        }
      });

      this.lastPokemonId = highestId;
      console.log('Last Pokemon ID:', this.lastPokemonId);
    });
  }

  closeModal() {
    this.close.emit();
  }

  nextPokemon() {
    console.log('Next button clicked');
    if (this.currentIndex < this.filteredPokemon.length - 1) {
      this.currentIndex++;
      this.loadPokemon(this.filteredPokemon[this.currentIndex].name);
    }
  }

  previousPokemon() {
    console.log('Previous button clicked');
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.loadPokemon(this.filteredPokemon[this.currentIndex].name);
    }
  }

  loadPokemon(name: string) {
    this.pokeApi.getPokemonDetails(name).subscribe((details: any) => {
      this.pokemon = details;
      this.getSpecies();
    });
  }

  getSpecies() {
    const baseName = this.pokemon.name.split('-')[0];
    this.pokeApi.getPokemonSpeciesDetails(baseName).subscribe(
      (details: any) => {
        this.pokemonSpecies = details;
        console.log(this.pokemon.id);
      },
      (error) => {
        console.error('Error fetching species details:', error);
      }
    );
  }

  getSelectedFlavorTextEntries(): any[] {
    if (!this.pokemonSpecies?.flavor_text_entries) return [];

    const englishEntries = this.pokemonSpecies.flavor_text_entries.filter(
      (entry: any) => entry.language.name === 'en'
    );

    const uniqueEntries = this.getUniqueEntries(englishEntries);

    if (uniqueEntries.length > 4) {
      return [...uniqueEntries.slice(0, 3), ...uniqueEntries.slice(-3)];
    } else {
      return uniqueEntries.slice(0, 4);
    }
  }

  private getUniqueEntries(entries: any[]): any[] {
    const uniqueEntries: any[] = [];

    entries.forEach((entry) => {
      const similarEntry = uniqueEntries.find(
        (uniqueEntry) =>
          this.calculateSimilarity(entry.flavor_text, uniqueEntry.flavor_text) >
          0.3
      );

      if (!similarEntry) {
        uniqueEntries.push(entry);
      } else if (entry.flavor_text.length > similarEntry.flavor_text.length) {
        const index = uniqueEntries.indexOf(similarEntry);
        uniqueEntries[index] = entry;
      }
    });

    return uniqueEntries;
  }

  private calculateSimilarity(str1: string, str2: string): number {
    const longer = str1.length > str2.length ? str1 : str2;
    const shorter = str1.length > str2.length ? str2 : str1;
    const longerLength = longer.length;

    if (longerLength === 0) {
      return 1.0;
    }

    return (longerLength - this.editDistance(longer, shorter)) / longerLength;
  }

  private editDistance(s1: string, s2: string): number {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    const costs: number[] = [];
    for (let i = 0; i <= s1.length; i++) {
      let lastValue = i;
      for (let j = 0; j <= s2.length; j++) {
        if (i === 0) {
          costs[j] = j;
        } else if (j > 0) {
          let newValue = costs[j - 1];
          if (s1.charAt(i - 1) !== s2.charAt(j - 1)) {
            newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
          }
          costs[j - 1] = lastValue;
          lastValue = newValue;
        }
      }
      if (i > 0) {
        costs[s2.length] = lastValue;
      }
    }
    return costs[s2.length];
  }
}
