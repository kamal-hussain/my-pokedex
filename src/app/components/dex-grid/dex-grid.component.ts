import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/services/poke-api.service';
@Component({
  selector: 'dex-grid',
  templateUrl: './dex-grid.component.html',
  styleUrls: ['./dex-grid.component.scss'],
})
export class DexGridComponent implements OnInit {
  title = 'Pokedex';
  pokeData: any;
  pokemon: any = [];
  page: number = 1;
  totalNumber: any;
  limit: number = 50;

  constructor(private apiCall: PokeApiService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.apiCall
      .getData(this.limit, this.page * this.limit - this.limit)
      .subscribe((data: any) => {
        this.totalNumber = data.count;

        data.results.forEach((result: any) => {
          this.apiCall.getMoreData(result.name).subscribe((data: any) => {
            this.pokeData = data;
            this.pokemon.push(data);

            this.pokemon.sort((a: any, b: any) => a.id - b.id);

            console.log(result);
            console.log(data);
          });
        });
      });
  }
}
