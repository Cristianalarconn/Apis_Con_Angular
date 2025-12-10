import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DragonDetailResponse } from '@app/modelos/dragonball/DragonDetailModel';
import { DragonBallApiService } from '@app/services/Dragonaball/dragon-ball-api-service';

@Component({
  selector: 'app-dragon-detail',
  imports: [CommonModule],
  templateUrl: './dragon-detail.html',
  styleUrl: './dragon-detail.scss',
})
export class DragonDetail implements OnInit {

  protected personajes?: DragonDetailResponse;

  constructor(
    private _cd: ChangeDetectorRef,
    private _dragonService: DragonBallApiService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this._route.params.subscribe(params => {
      const id = params['id'];

      this._dragonService.getCharacterById(id).subscribe(resp => {
        this.personajes = resp;
        this._cd.markForCheck();
      });
    });
  }
}