import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Media } from './models/media' 

@Injectable({
  providedIn: 'root'
})
export class MediaSerice {

  constructor(private http: HttpClient) { }

  getMovie(page: number, genre?: string): Observable<Media> {
    let apiURL = 'https://api.themoviedb.org/3/discover/movie?api_key=39d7f36224689a01c01ff43a6ba763ff&page=' + page; 
    if (genre) {
      apiURL += '&with_genres=' + genre;
    }
		return this.http.get<Media>(apiURL);
	}
}
