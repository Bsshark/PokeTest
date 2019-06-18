import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CapitalizePipe } from './capitalize.pipe';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { DataViewModule } from 'primeng/dataview';

import { AccordionModule } from 'primeng/accordion';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { FieldsetModule } from 'primeng/fieldset';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { PokedexDataComponent } from './components/pokedex-data/pokedex-data.component';
import { PokeDataComponent } from './components/poke-data/poke-data.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
    NavigationMenuComponent,
    PokedexDataComponent,
    PokeDataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AccordionModule,
    PanelModule,
    ButtonModule,
    RadioButtonModule,
    InputTextModule,
    CardModule,
    BrowserAnimationsModule,
    OrganizationChartModule,
    FieldsetModule,
    AppRoutingModule,
    ChartModule,
    DataViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
