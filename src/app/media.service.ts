import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Media } from './models/media' 

@Injectable({
  providedIn: 'root'
})
export class MediaSerice {

  constructor(private http: HttpClient) { }

  getMedia(page: number, genre?: string): Observable<Media> {
    let apiURL = 'https://api.themoviedb.org/3/discover/movie?api_key=39d7f36224689a01c01ff43a6ba763ff&page=' + page; 
    if (genre) {
      apiURL += '&with_genres=' + genre;
    }
		return this.http.get<Media>(apiURL);
	}

  searchMedia(page: number,text: string): Observable<Media> {
    let apiURL = 'https://api.themoviedb.org/3/discover/movie?api_key=39d7f36224689a01c01ff43a6ba763ff&page=' + page; 
    if (text) {
      apiURL += '&query=' + text;
    }
		return this.http.get<Media>(apiURL);
	}
}
