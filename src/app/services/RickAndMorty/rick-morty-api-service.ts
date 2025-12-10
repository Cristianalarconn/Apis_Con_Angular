import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RickListResponse } from '../../modelos/rickandmorty/RickListModel';
import { RickDetailResponse } from '../../modelos/rickandmorty/RickDetailModel';



@Injectable({
  providedIn: 'root',
})
export class RickApiService {

  private BaseUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private _httpClient: HttpClient) {}

  getCharacters(): Observable<RickListResponse> {
    return this._httpClient.get<RickListResponse>(this.BaseUrl);
  }

  getCharacterById(id: number): Observable<RickDetailResponse> {
    return this._httpClient.get<RickDetailResponse>(`${this.BaseUrl}/${id}`);
  }
}
