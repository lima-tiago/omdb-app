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

export async function getMovies(params: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}&${params}`);
  const data = await response.json();
  return data;
}
