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
  limit: number = 10;
  term: any;

  constructor(private apiCall: PokeApiService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.apiCall
      .getData(this.limit, this.page * this.limit - this.limit)
      .subscribe((data: any) => {
        console.log(data);
        this.totalNumber = data.count;

        data.results.forEach((result: any) => {
          this.apiCall.getMoreData(result.name).subscribe((data: any) => {
            this.pokemon.push(data);
            // this.pokeData = data;
            // console.log(this.pokeData);

            this.pokemon.sort((a: any, b: any) => a.id - b.id);
            // console.log(this.pokemon);
          });
        });
      });
  }

  // searchPokemon() {
  //   if(this.term === ""){
  //     this.ngOnInit();
  //   }else {
  //     this.apiCall
  //     .getData(25, 0)
  //     .subscribe((data: any) => {
  //       this.totalNumber = data.count;

  //       data.results.forEach((result: any) => {
  //         this.apiCall.getMoreData(result.name).subscribe((data: any) => {
  //           this.pokemon.push(data);
  //           // console.log(this.pokemon);
  //           this.pokemon.filter((res: any) => {
  //             return res.name.toLocaleLowerCase().match(this.term.toLocaleLowerCase());
  //           })
  //         });

  //         });
  //       });
  //     }
  //   }
  }



