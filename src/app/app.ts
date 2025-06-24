import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SearchComponent} from './search/search.component'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SearchComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})


export class App {
  protected title = 'angular-search-app';
  

  onClick() {
    console.log('5')
  }

}
