export interface MediaItem {
    poster_path:       null;
    adult:             boolean;
    overview:          string;
    release_date:      Date;
    genre_ids:         number[];
    id:                number;
    original_title:    string;
    original_language: any;
    title:             string;
    backdrop_path:     null;
    popularity:        number;
    vote_count:        number;
    video:             boolean;
    vote_average:      number;
    genres:            Genre[];
}
export interface Genre {
    id:   number;
    name: string;
}
