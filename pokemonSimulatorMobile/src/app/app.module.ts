import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/layouts/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PokemonSearchComponent } from './pokemon/pokemon-search/pokemon-search.component';
import { PokemonSpeciesService } from './pokemon/pokemon-species.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PokemonRegisterComponent } from './pokemon/pokemon-register/pokemon-register.component';
import { BasicDropdownComponent } from './shared/layouts/basic-dropdown/basic-dropdown.component';
import { NatureService } from './nature/nature.service';
import { StatPipe } from './shared/pipes/stat.pipe';
import { MoveCategoryPipe } from './shared/pipes/move-category.pipe';
import { PokemonService } from './pokemon/pokemon.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimulationComponent } from './simulation/simulation/simulation.component';
import { SimulationCardComponent } from './simulation/simulation-card/simulation-card.component';
import { SimulationService } from './simulation/simulation.service';
import { LoginComponent } from './user/login/login.component';
import { AuthService } from './shared/services/auth.service';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { NatureDropdownComponent } from './nature/nature-dropdown/nature-dropdown.component';
import { AdvancedDropdownComponent } from './shared/layouts/advanced-dropdown/advanced-dropdown.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MoveDropdownComponent } from './moves/move-dropdown/move-dropdown.component';

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
    MoveDropdownComponent,
  ],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    PokemonSpeciesService,
    PokemonService,
    NatureService,
    SimulationService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
