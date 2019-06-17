import { Component, OnInit } from '@angular/core';
import { PokeServiceService } from '../services/poke-service.service';
import { Pokemon } from '../models/Pokemon';
import { FormGroup } from '@angular/forms';
import {FlavorTextEntries} from '../models/Flavor_Text_Entries';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {


  ngOnInit(): void {
  }

}

