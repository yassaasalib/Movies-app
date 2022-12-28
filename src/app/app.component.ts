import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../styles/index.scss']
})
export class AppComponent {
  page = 1;
  perPage = 5;
  mediaItems = [
    {
      id: 1,
      name: 'Firebug',
      medium: 'Series',
      category: 'Science Fiction',
      year: 2010,
      watchedOn: 1294166565384,
      isFavorite: false,
      picture: "00"
    },
    {
      id: 2,
      name: 'The Small Tall',
      medium: 'Movies',
      category: 'Comedy',
      year: 2015,
      watchedOn: null,
      isFavorite: true
    }, {
      id: 3,
      name: 'The Redemption',
      medium: 'Movies',
      category: 'Action',
      year: 2016,
      watchedOn: null,
      isFavorite: false
    }, {
      id: 4,
      name: 'Hoopers',
      medium: 'Series',
      category: 'Drama',
      year: null,
      watchedOn: null,
      isFavorite: true
    }, {
      id: 5,
      name: 'Happy Joe: Cheery Road',
      medium: 'Movies',
      category: 'Action',
      year: 2015,
      watchedOn: 1457166565384,
      isFavorite: false
    },
    {
      id: 6,
      name: 'Firebug',
      medium: 'Series',
      category: 'Science Fiction',
      year: 2010,
      watchedOn: 1294166565384,
      isFavorite: false,
    },
    {
      id: 7,
      name: 'The Small Tall',
      medium: 'Movies',
      category: 'Comedy',
      year: 2015,
      watchedOn: null,
      isFavorite: true
    }, {
      id: 8,
      name: 'The Redemption',
      medium: 'Movies',
      category: 'Action',
      year: 2016,
      watchedOn: null,
      isFavorite: false
    }, {
      id: 9,
      name: 'Hoopers',
      medium: 'Series',
      category: 'Drama',
      year: null,
      watchedOn: null,
      isFavorite: true
    }, {
      id: 10,
      name: 'Happy Joe: Cheery Road',
      medium: 'Movies',
      category: 'Action',
      year: 2015,
      watchedOn: 1457166565384,
      isFavorite: false
    },
    {
      id: 11,
      name: 'Firebug',
      medium: 'Series',
      category: 'Science Fiction',
      year: 2010,
      watchedOn: 1294166565384,
      isFavorite: false,
    },
    {
      id: 12,
      name: 'The Small Tall',
      medium: 'Movies',
      category: 'Comedy',
      year: 2015,
      watchedOn: null,
      isFavorite: true
    }, {
      id: 13,
      name: 'The Redemption',
      medium: 'Movies',
      category: 'Action',
      year: 2016,
      watchedOn: null,
      isFavorite: false
    }, {
      id: 14,
      name: 'Hoopers',
      medium: 'Series',
      category: 'Drama',
      year: null,
      watchedOn: null,
      isFavorite: true
    }, {
      id: 15,
      name: 'Happy Joe: Cheery Road',
      medium: 'Movies',
      category: 'Action',
      year: 2015,
      watchedOn: 1457166565384,
      isFavorite: false
    }, {
      id: 17,
      name: 'Happy Joe: Cheery Road',
      medium: 'Movies',
      category: 'Action',
      year: 2015,
      watchedOn: 1457166565384,
      isFavorite: false
    },
    {
      id: 18,
      name: 'Firebug',
      medium: 'Series',
      category: 'Science Fiction',
      year: 2010,
      watchedOn: 1294166565384,
      isFavorite: false,
    },
    {
      id: 19,
      name: 'The Small Tall',
      medium: 'Movies',
      category: 'Comedy',
      year: 2015,
      watchedOn: null,
      isFavorite: true
    }, {
      id: 20,
      name: 'The Redemption',
      medium: 'Movies',
      category: 'Action',
      year: 2016,
      watchedOn: null,
      isFavorite: false
    }, {
      id: 21,
      name: 'Hoopers',
      medium: 'Series',
      category: 'Drama',
      year: null,
      watchedOn: null,
      isFavorite: true
    }, {
      id: 22,
      name: 'Happy Joe: Cheery Road',
      medium: 'Movies',
      category: 'Action',
      year: 2015,
      watchedOn: 1457166565384,
      isFavorite: false
    },
  ];
  hasMore = true;

  constructor() {
    this.loadMovies();
  }

  loadMovies() {
    const start = (this.page - 1) * this.perPage;
    const end = start + this.perPage;
    this.mediaItems = allMediaItems.slice(start, end);
    this.hasMore = end < allMediaItems.length;
  }

  loadMore() {
    this.page++;
    this.loadMovies();
  }
}

const allMediaItems = [
  {
    id: 1,
    name: 'Firebug',
    medium: 'Series',
    category: 'Science Fiction',
    year: 2010,
    watchedOn: 1294166565384,
    isFavorite: false,
    picture: "00"
  },
  {
    id: 2,
    name: 'The Small Tall',
    medium: 'Movies',
    category: 'Comedy',
    year: 2015,
    watchedOn: null,
    isFavorite: true
  }, {
    id: 3,
    name: 'The Redemption',
    medium: 'Movies',
    category: 'Action',
    year: 2016,
    watchedOn: null,
    isFavorite: false
  }, {
    id: 4,
    name: 'Hoopers',
    medium: 'Series',
    category: 'Drama',
    year: null,
    watchedOn: null,
    isFavorite: true
  }, {
    id: 5,
    name: 'Happy Joe: Cheery Road',
    medium: 'Movies',
    category: 'Action',
    year: 2015,
    watchedOn: 1457166565384,
    isFavorite: false
  },
  {
    id: 6,
    name: 'Firebug',
    medium: 'Series',
    category: 'Science Fiction',
    year: 2010,
    watchedOn: 1294166565384,
    isFavorite: false,
  },
  {
    id: 7,
    name: 'The Small Tall',
    medium: 'Movies',
    category: 'Comedy',
    year: 2015,
    watchedOn: null,
    isFavorite: true
  }, {
    id: 8,
    name: 'The Redemption',
    medium: 'Movies',
    category: 'Action',
    year: 2016,
    watchedOn: null,
    isFavorite: false
  }, {
    id: 9,
    name: 'Hoopers',
    medium: 'Series',
    category: 'Drama',
    year: null,
    watchedOn: null,
    isFavorite: true
  }, {
    id: 10,
    name: 'Happy Joe: Cheery Road',
    medium: 'Movies',
    category: 'Action',
    year: 2015,
    watchedOn: 1457166565384,
    isFavorite: false
  },
  {
    id: 11,
    name: 'Firebug',
    medium: 'Series',
    category: 'Science Fiction',
    year: 2010,
    watchedOn: 1294166565384,
    isFavorite: false,
  },
  {
    id: 12,
    name: 'The Small Tall',
    medium: 'Movies',
    category: 'Comedy',
    year: 2015,
    watchedOn: null,
    isFavorite: true
  }, {
    id: 13,
    name: 'The Redemption',
    medium: 'Movies',
    category: 'Action',
    year: 2016,
    watchedOn: null,
    isFavorite: false
  }, {
    id: 14,
    name: 'Hoopers',
    medium: 'Series',
    category: 'Drama',
    year: null,
    watchedOn: null,
    isFavorite: true
  }, {
    id: 15,
    name: 'Happy Joe: Cheery Road',
    medium: 'Movies',
    category: 'Action',
    year: 2015,
    watchedOn: 1457166565384,
    isFavorite: false
  }, {
    id: 17,
    name: 'Happy Joe: Cheery Road',
    medium: 'Movies',
    category: 'Action',
    year: 2015,
    watchedOn: 1457166565384,
    isFavorite: false
  },
  {
    id: 18,
    name: 'Firebug',
    medium: 'Series',
    category: 'Science Fiction',
    year: 2010,
    watchedOn: 1294166565384,
    isFavorite: false,
  },
  {
    id: 19,
    name: 'The Small Tall',
    medium: 'Movies',
    category: 'Comedy',
    year: 2015,
    watchedOn: null,
    isFavorite: true
  }, {
    id: 20,
    name: 'The Redemption',
    medium: 'Movies',
    category: 'Action',
    year: 2016,
    watchedOn: null,
    isFavorite: false
  }, {
    id: 21,
    name: 'Hoopers',
    medium: 'Series',
    category: 'Drama',
    year: null,
    watchedOn: null,
    isFavorite: true
  }, {
    id: 22,
    name: 'Happy Joe: Cheery Road',
    medium: 'Movies',
    category: 'Action',
    year: 2015,
    watchedOn: 1457166565384,
    isFavorite: false
  },
];
