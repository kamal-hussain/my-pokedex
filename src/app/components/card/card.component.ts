import { Component, OnInit, Input } from '@angular/core';
import { PokeApiService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() item!: any
  details: any
  displaySprite: any

  constructor(private pokeApi: PokeApiService) { }

  ngOnInit(): void {
    this.pokeApi
      .getPokemonDetails(this.item.name)
      .subscribe((data: any) => {
        this.details = data
        this.calculateDisplaySprite()
      });
  }

  calculateDisplaySprite() {
    if(this.details.sprites.front_default != null) {
      this.displaySprite = this.details.sprites.front_default
    }

    if(this.details.sprites.front_default == null) {
      this.displaySprite = this.details.sprites.other.home.front_default
    }

    if(this.details.sprites.front_default != null && this.details.sprites.other.home.front_default == null) {
      this.displaySprite = this.details.sprites.other['official-artwork'].front_default
    }

    if(this.details.id == 10181) {
      this.displaySprite = this.details.sprites.versions['generation-vii']['ultra-sun-ultra-moon'].front_default
    }

    if(this.details.id == 10158 || this.details.id == 10159) {
      this.displaySprite = this.details.sprites.versions['generation-viii'].icons.front_default
    }
  }
}
