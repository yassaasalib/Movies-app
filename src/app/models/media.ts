import { MediaItem } from "./mediaItem";

export interface Media {
    page:          number;
    results:       MediaItem[];
    total_results: number;
    total_pages:   number;
}