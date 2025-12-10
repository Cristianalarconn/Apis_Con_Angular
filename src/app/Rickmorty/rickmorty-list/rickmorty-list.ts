import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RickSimple } from '@app/modelos/rickandmorty/RickListModel';
import { RickApiService } from '@app/services/RickAndMorty/rick-morty-api-service';

@Component({
  standalone: true,
  selector: 'app-rickmorty-list',
  imports: [RouterLink],
  templateUrl: './rickmorty-list.html',
  styleUrl: './rickmorty-list.scss',
})
export class RickmortyList implements OnInit {

  protected personajes: RickSimple[] = [];

  constructor(
    private _cd: ChangeDetectorRef,
    private _rickService: RickApiService,
  ) {}

  ngOnInit(): void {
    this._rickService.getCharacters().subscribe(response => {
      this.personajes = response.results;
      this._cd.markForCheck();
    });
  }

  
}
