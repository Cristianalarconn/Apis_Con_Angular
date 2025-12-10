import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DragonListResponse } from '@app/modelos/dragonball/DragonListModel';
import { DragonDetailResponse } from '@app/modelos/dragonball/DragonDetailModel';

@Injectable({
  providedIn: 'root',
})
export class DragonBallApiService {

  private BaseUrl = 'https://dragonball-api.com/api/characters';

  constructor(private _httpClient: HttpClient) {}

  getCharacters(): Observable<DragonListResponse> {
    return this._httpClient.get<DragonListResponse>(this.BaseUrl);
  }

  getCharacterById(id: number): Observable<DragonDetailResponse> {
    return this._httpClient.get<DragonDetailResponse>(`${this.BaseUrl}/${id}`);
  }
}
