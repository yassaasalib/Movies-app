import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MediaSerice } from './media.service'
import { Media } from './models/media';
import { MediaItem } from './models/mediaItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../styles/index.scss']
})
export class AppComponent implements OnInit  {
  page = 1;
  perPage = 5;
  hasMore = true;
  media$?: Observable<Media>;
  mediaItems?: MediaItem[];
  genre?: string;
  searchText?: string;

  constructor(private mediaSerice: MediaSerice) {  }

  ngOnInit(): void {
    this.mediaSerice.getMedia(1, "Action").subscribe(media => this.mediaItems = media.results);
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

}
