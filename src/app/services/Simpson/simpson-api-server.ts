import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SimpsonDetailResponse } from '@app/modelos/simpson/SimpsonDetailModel';
import { SimpsonListResponse } from '@app/modelos/simpson/SimpsonListModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SimpsonApiServer {

  private BaseUrl = 'https://thesimpsonsapi.com/api/characters';

  constructor(private _httpClient: HttpClient) {}

  getCharacters(): Observable<SimpsonListResponse> {
    return this._httpClient.get<SimpsonListResponse>(this.BaseUrl);
  }

  getCharacterById(id: number): Observable<SimpsonDetailResponse> {
    return this._httpClient.get<SimpsonDetailResponse>(`${this.BaseUrl}/${id}`);
  }
}
