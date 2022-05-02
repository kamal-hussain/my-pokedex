import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PokeNavComponent } from './components/poke-nav/poke-nav.component';
import { DexGridComponent } from './components/dex-grid/dex-grid.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PokeApiService } from './services/poke-api.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { SpriteComponent } from './components/sprite/sprite.component';

@NgModule({
  declarations: [
    AppComponent,
    PokeNavComponent,
    DexGridComponent,
    CardComponent,
    SpriteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [PokeApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
