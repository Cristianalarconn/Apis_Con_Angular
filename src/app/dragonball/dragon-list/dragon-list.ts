import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DragonSimple } from '@app/modelos/dragonball/DragonListModel';
import { DragonBallApiService } from '@app/services/Dragonaball/dragon-ball-api-service';

@Component({
  selector: 'app-dragon-list',
  imports: [RouterLink,],
  templateUrl: './dragon-list.html',
  styleUrl: './dragon-list.scss',
})
export class DragonList implements OnInit{
 protected personajes: DragonSimple[] = [];

  constructor(
    private _cd: ChangeDetectorRef,
    private _dragonService: DragonBallApiService,
  ) {}

  ngOnInit(): void {
    this._dragonService.getCharacters().subscribe(response => {
      this.personajes = response.items;
      console.log(response.items)
      this._cd.markForCheck();
    });
  }
}
