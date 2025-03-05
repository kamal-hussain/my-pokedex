import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeDetailsComponent } from './components/poke-details/poke-details.component';
import { DexGridComponent } from './components/dex-grid/dex-grid.component';

const routes: Routes = [
  { path: '', component: DexGridComponent },
  { path: 'pokemon/:name', component: PokeDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
