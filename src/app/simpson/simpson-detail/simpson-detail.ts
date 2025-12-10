import { CommonModule, NgIf } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SimpsonDetailResponse } from '@app/modelos/simpson/SimpsonDetailModel';
import { SimpsonApiServer } from '@app/services/Simpson/simpson-api-server';

@Component({
  selector: 'app-simpson-detail',
  imports: [CommonModule, NgIf],
  templateUrl: './simpson-detail.html',
  styleUrl: './simpson-detail.scss',
})
export class SimpsonDetail implements OnInit {

  protected personajes?: SimpsonDetailResponse;

  constructor(
    private _cd: ChangeDetectorRef,
    private _simpsonService: SimpsonApiServer,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this._route.params.subscribe(params => {
      const id = params['id'];

      this._simpsonService.getCharacterById(id).subscribe(resp => {
        this.personajes = resp;
        this._cd.markForCheck();
      });
    });
  }
}
