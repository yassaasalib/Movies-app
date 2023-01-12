import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MediaSerice } from '../media.service'
import { Media } from '../models/media';
import { MediaItem } from '../models/mediaItem';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../styles/index.scss']
})
export class HomeComponent implements OnInit {
  page = 1;
  perPage = 5;
  hasMore = true;
  media$?: Observable<Media>;
  mediaItems?: MediaItem[];
  genre?: number;
  searchText?: string;

  constructor(private mediaSerice: MediaSerice) {  }

  ngOnInit(): void {
    this.getMedia(1);
  }
  
  loadMore() {
    this.page++;
    this.mediaSerice.getMedia(this.page, this.genre).subscribe(media => this.mediaItems = this.mediaItems?.concat(media.results));
  }

  searchMovies(searchText?: string) {
    this.mediaSerice.searchMedia(1, searchText).subscribe(media => {
      this.mediaItems = media.results;
    });
  }

  getMedia(currentPage: number, genre?: number) {
    this.mediaSerice.getMedia(currentPage, genre).subscribe(media => this.mediaItems = media.results);
    this.genre = genre;
  }

}
