import { Component, OnInit, Input } from '@angular/core';
import { PokeApiService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() item!: any;
  details: any;
  displaySprite: any;
  type1: string = '';
  type2: string = '';

  constructor(private pokeApi: PokeApiService) {}

  ngOnInit(): void {
    this.pokeApi.getPokemonDetails(this.item.name).subscribe((data: any) => {
      this.details = data;
      this.calculateDisplaySprite();
    });
  }

  calculateDisplaySprite() {
    const spriteFrontDefault = this.details.sprites.front_default;
    const spriteHomeFront = this.details.sprites.other.home.front_default;
    const spriteOfficialArt =
      this.details.sprites.other['official-artwork'].front_default;
    const spriteDreamWorld =
      this.details.sprites.other['dream_world'].front_default;
    if (spriteFrontDefault != null) {
      this.displaySprite = spriteFrontDefault;
    }

    if (spriteFrontDefault == null) {
      this.displaySprite = spriteHomeFront;
    }

    if (spriteFrontDefault == null && spriteHomeFront == null) {
      this.displaySprite = spriteOfficialArt;
    }

    if (
      spriteFrontDefault == null &&
      spriteHomeFront == null &&
      spriteOfficialArt == null
    ) {
      this.displaySprite = spriteDreamWorld;
    }

    // if(this.details.id == 10181) {
    //   this.displaySprite = spriteOfficialArt;
    // }

    // if (
    //   this.details.id == 10158 ||
    //   this.details.id == 10159 ||
    //   this.details.id == 10153 ||
    //   this.details.id == 10154
    // ) {
    //   this.displaySprite = spriteOfficialArt;
    // }

  }
}
