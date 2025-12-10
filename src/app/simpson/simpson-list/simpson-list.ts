import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SimpsonSimple } from '@app/modelos/simpson/SimpsonListModel';
import { SimpsonApiServer } from '@app/services/Simpson/simpson-api-server';

@Component({
  selector: 'app-simpson-list',
  imports: [RouterLink],
  templateUrl: './simpson-list.html',
  styleUrl: './simpson-list.scss',
})
export class SimpsonList implements OnInit {

  protected personajes: SimpsonSimple[] = [];

  constructor(
    private _cd: ChangeDetectorRef,
    private _simpsonService: SimpsonApiServer,
  ) {}

  ngOnInit(): void {
    this._simpsonService.getCharacters().subscribe(response => {
      console.log(response)
      this.personajes = response.results;
      this._cd.markForCheck();
    });
  }
}
