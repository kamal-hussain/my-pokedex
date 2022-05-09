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
  limit: number = 10;
  term: any;

  constructor(private pokeApi: PokeApiService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.pokeApi.getPokemon(1123,0).subscribe((res) => {
      this.totalNumber = res.count;
      this.pokemon = res.results
    })
  }

  pageChange(input: any) {
    this.page = input;
  }
}
