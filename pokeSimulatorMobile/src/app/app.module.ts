import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './shared/layouts/header/header.component';
import { HomeComponent } from './home/home.component';
import { PokemonSearchComponent } from './pokemon/pokemon-search/pokemon-search.component';
import { PokemonRegisterComponent } from './pokemon/pokemon-register/pokemon-register.component';
import { BasicDropdownComponent } from './shared/layouts/basic-dropdown/basic-dropdown.component';
import { StatPipe } from './shared/pipes/stat.pipe';
import { MoveCategoryPipe } from './shared/pipes/move-category.pipe';
import { SimulationComponent } from './simulation/simulation/simulation.component';
import { SimulationCardComponent } from './simulation/simulation-card/simulation-card.component';
import { LoginComponent } from './user/login/login.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { AdvancedDropdownComponent } from './shared/layouts/advanced-dropdown/advanced-dropdown.component';
import { NatureDropdownComponent } from './nature/nature-dropdown/nature-dropdown.component';
import { MoveDropdownComponent } from './moves/move-dropdown/move-dropdown.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './shared/services/auth.service';
import { SimulationService } from './simulation/simulation.service';
import { NatureService } from './nature/nature.service';
import { PokemonService } from './pokemon/pokemon.service';
import { PokemonSpeciesService } from './pokemon/pokemon-species.service';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    PokemonSearchComponent,
    PokemonRegisterComponent,
    BasicDropdownComponent,
    StatPipe,
    MoveCategoryPipe,
    SimulationComponent,
    SimulationCardComponent,
    LoginComponent,
    SignUpComponent,
    AdvancedDropdownComponent,
    NatureDropdownComponent,
    MoveDropdownComponent,],
  entryComponents: [],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(), 
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    ToastrModule.forRoot()],
  providers: [
    PokemonSpeciesService,
    PokemonService,
    NatureService,
    SimulationService,
    AuthService,
    SplashScreen,
    StatusBar,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
