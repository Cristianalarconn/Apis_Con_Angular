import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RickDetailResponse } from '@app/modelos/rickandmorty/RickDetailModel';
import { RickApiService } from '@app/services/RickAndMorty/rick-morty-api-service';

@Component({
  selector: 'app-rickmorty-detail',
  imports: [CommonModule],
  templateUrl: './rickmorty-detail.html',
  styleUrl: './rickmorty-detail.scss',
})
export class RickmortyDetail implements OnInit {

  protected personajes?: RickDetailResponse;

  constructor(
    private _cd: ChangeDetectorRef,
    private _rickService: RickApiService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this._route.params.subscribe(params => {
      const id = params['id'];

      this._rickService.getCharacterById(id).subscribe(resp => {
        this.personajes = resp;
        this._cd.markForCheck();
      });
    });
  }
}
