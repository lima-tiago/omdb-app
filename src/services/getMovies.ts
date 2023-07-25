export type MoviesListResponse = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
};

export type MoviesResponse = {
  Response: string;
  Search: MoviesListResponse[];
  totalResults: string;
};

export type DetailedMovieResponse = {
  Actors: string;
  Awards: string;
  BoxOffice: string;
  Country: string;
  DVD: string;
  Director: string;
  Genre: string;
  Language: string;
  Metascore: string;
  Plot: string;
  Poster: string;
  Production: string;
  Rated: string;
  Ratings: {
    Source: string;
    Value: string;
  }[];
  Released: string;
  Response: string;
  Runtime: string;
  Title: string;
  Website: string;
  Writer: string;
  Year: string;
  imdbID: string;
  imdbRating: string;
  imdbVotes: string;
};

export async function getMovies(params: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}&${params}`);
  const data = await response.json();
  return data;
}
