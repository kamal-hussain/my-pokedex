import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PokeNavComponent } from './components/poke-nav/poke-nav.component';
import { DexGridComponent } from './components/dex-grid/dex-grid.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PokeApiService } from './services/poke-api.service';
import { CardComponent } from './components/card/card.component';
import { SpriteComponent } from './components/sprite/sprite.component';
import { DexCarouselComponent } from './components/dex-carousel/dex-carousel.component';
import { PokemonModalComponent } from './components/pokemon-modal/pokemon-modal.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PokeNavComponent,
    DexGridComponent,
    CardComponent,
    SpriteComponent,
    DexCarouselComponent,
    PokemonModalComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    SearchPipe,
  ],
  providers: [PokeApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
