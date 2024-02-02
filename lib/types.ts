export type MovieGenre =
  | 12
  | 14
  | 16
  | 18
  | 28
  | 35
  | 36
  | 53
  | 80
  | 10749
  | 10751
  | 10752
  | 10751
  | 878;

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: MovieGenre[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type MovieListResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};
