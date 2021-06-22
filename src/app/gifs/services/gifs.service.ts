import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GIF, Gifs } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';
  private key: string = 'DYNKmMCUHV46WqpVWf54XCVrKKtOojOD';
  private _history: string[] = [];

  results: Gifs[] = [];

  get history(): string[]{
    return [...this._history];
  }

  searchGifs(query: string = ''): void{
    query = query.trim().toLowerCase();
    if(!this._history.includes(query)){
      console.log(query);
      
      this._history.unshift(query);
      this._history = this._history.slice(0, 10);
    }
    
    const params = new HttpParams()
    .set('api_key', this.key)
    .set('limit', 10)
    .set('q', query);

    this.http.get<GIF>(`${this.serviceUrl}/search`, {params})
    .subscribe((resp: GIF) => {
      this.results = resp.data;
      
    });

  }


  constructor(private http: HttpClient) { }
}
