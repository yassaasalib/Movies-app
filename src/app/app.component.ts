import { HttpClient } from '@angular/common/http';
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
  genre?: string;
  searchStr?: MediaItem[];

  constructor(private mediaSerice: MediaSerice) {  }


  loadMovies() {
    const start = (this.page - 1) * this.perPage;
    const end = start + this.perPage;
  }

  ngOnInit(): void {
    this.mediaSerice.getMedia(1, "Action").subscribe(media => this.mediaItems = media.results);
    this.mediaSerice.searchMedia("Violent Night").subscribe(media => this.mediaItems = media.results);

  }
  
  loadMore() {
    this.page++;
    this.mediaSerice.getMedia(this.page, this.genre).subscribe(media => this.mediaItems = this.mediaItems?.concat(media.results));
  }

  searchMovies() {
    this.mediaSerice.searchMedia('Violent Night').subscribe(res => {
      this.searchStr = res.results
    });
  }

}
