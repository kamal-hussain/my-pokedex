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
  @Input() pokemonSpecies: any;
  @Output() close = new EventEmitter<void>();

  constructor(private pokeApi: PokeApiService) {}

  ngOnInit() {
    this.getSpecies();

    document.body.classList.add('modal-open');
  }

  ngOnDestroy() {
    document.body.classList.remove('modal-open');
  }

  closeModal() {
    this.close.emit();
  }

  getSpecies() {
    this.pokeApi
      .getPokemonSpeciesDetails(this.pokemon.name)
      .subscribe((details: any) => {
        this.pokemonSpecies = details;
        console.log(this.pokemonSpecies);
        console.log(this.pokemon);
      });
  }
}
