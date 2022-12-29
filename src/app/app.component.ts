import { Component, OnInit } from '@angular/core';
import { map, Observable, of } from 'rxjs';
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

  constructor(private mediaSerice: MediaSerice) {  }

  loadMovies() {
    const start = (this.page - 1) * this.perPage;
    const end = start + this.perPage;
    // this.mediaItems = allMediaItems.slice(start, end);
    // this.hasMore = end < allMediaItems.length;
  }

  ngOnInit(): void {
    this.mediaSerice.getMovie(1).subscribe(media => this.mediaItems = media.results);
  }
  
  loadMore() {
    this.page++;
    this.loadMovies();
  }
}
