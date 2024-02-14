import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './Main/app.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DelayedPresentationDirective } from './Directives/delayed-presentation.directive';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchAreaComponent } from './search-area/search-area.component';
import { PrivateZoneComponent } from './private-zone/private-zone.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { TypeColorPipe } from './Pipes/type-color.pipe';
import { SecureConnectionInterceptor } from './Interceptors/secure-connection.interceptor';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';





@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    DelayedPresentationDirective,
    PokemonSearchComponent,
    PageNotFoundComponent,
    PokemonDetailsComponent,
    SearchAreaComponent,
    PrivateZoneComponent,
    HomepageComponent,
    LoginComponent,
    TypeColorPipe,
    AddPokemonComponent,
    
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: SecureConnectionInterceptor,
    multi: true
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
