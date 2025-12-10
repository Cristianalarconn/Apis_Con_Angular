import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DragonList } from './dragonball/dragon-list/dragon-list';
import { RickmortyList } from './Rickmorty/rickmorty-list/rickmorty-list';
import { SimpsonList } from './simpson/simpson-list/simpson-list';
import { Menu } from './menu/menu/menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Menu],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Series_y_personajes');
}
