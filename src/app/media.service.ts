import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Media } from './models/media' 
import { MediaDetails } from './models/mediaDetails';

@Injectable({
  providedIn: 'root'
})
export class MediaSerice {
  private apiKey = '39d7f36224689a01c01ff43a6ba763ff';

  constructor(private http: HttpClient) { }

  getMedia(page: number, genre?: string): Observable<Media> {
    let apiURL = `https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&page=${page}`; 
    if (genre) {
      apiURL += `&with_genres=${genre}`;
    }
		return this.http.get<Media>(apiURL);
	}

  searchMedia(page: number, searchText?: string): Observable<Media> {
    let apiURL = `https://api.themoviedb.org/3/search/multi?api_key=${this.apiKey}&page=${page}`; 
    if (searchText) {
      apiURL += `&query=${searchText}`;
    }
    return this.http.get<Media>(apiURL);
  }

  details(id: number): Observable<MediaDetails> {
    let apiURL = `https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}`; 
    return this.http.get<MediaDetails>(apiURL);
  }

  // filtterMedia(page: number, genre?: string): Observable<Media> {
  //   let apiURL = `https://api.themoviedb.org/3/gener/movie/list?api_key=${this.apiKey}&page=${page}`; 
  //   if (genre) {
  //     apiURL += `&query=${genre}`;
  //   }
  //   return this.http.get<Media>(apiURL);
  // }
}
