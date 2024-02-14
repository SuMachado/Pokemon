import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { SearchAreaComponent } from './search-area/search-area.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { VerifyAuthService } from './Services/verify-auth.service';
import { HomepageComponent } from './homepage/homepage.component';
import { PrivateZoneComponent } from './private-zone/private-zone.component';
import { PrivateZoneGuard } from './Guards/private-zone-guard.guard';
import { LoginComponent } from './login/login.component';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'private', component: PrivateZoneComponent, canActivate: [PrivateZoneGuard] },
  { path: 'pokemonList', component: PokemonListComponent },
  { path: 'add-pokemon', component: AddPokemonComponent },
  { path: 'searchArea', component: SearchAreaComponent},
  { path: 'detail/:id', component: PokemonDetailsComponent },
  { path: 'private', component: PrivateZoneComponent, canActivate: [VerifyAuthService] },
  { path: 'home', component: HomepageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
