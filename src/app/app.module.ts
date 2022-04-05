import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PokeNavComponent } from './components/poke-nav/poke-nav.component';
import { DexGridComponent } from './components/dex-grid/dex-grid.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PokeApiService } from './services/poke-api.service';

@NgModule({
  declarations: [AppComponent, PokeNavComponent, DexGridComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [PokeApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
