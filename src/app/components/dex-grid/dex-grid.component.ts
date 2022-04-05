import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/services/poke-api.service';
@Component({
  selector: 'dex-grid',
  templateUrl: './dex-grid.component.html',
  styleUrls: ['./dex-grid.component.scss'],
})
export class DexGridComponent implements OnInit {
  title = 'my-app';
  apiData: any = [];
  page: number = 1;
  totalNumber: any;
  limit: number = 10;
  typeCount: number = 1;
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
            this.apiData.push(data);
            this.apiData.sort((a: any, b: any) => a.id - b.id);
            // this.typeCount = this.apiData.filter(data.types[].type).length;
            //  console.log(result)
            console.log(data);
          });
        });
      });
  }
}
