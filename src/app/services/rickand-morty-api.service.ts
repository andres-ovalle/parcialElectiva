import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class RickandMortyApiService {

  constructor(private _Http: HttpClient) { }

  getEpisodeSchema(){
    return this._Http.get(`${environment.apiUrl}episode/`)
  }

}
