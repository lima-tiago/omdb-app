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

export type MoviesListResponse = {
  id: string;
  moviedetail: DetailedMovieResponse;
};

export type MoviesResponse = {
  id: string;
  allMoviedetaileds: MoviesListResponse[];
};

export async function getMovies(query: string) {
  const graphql = {
    query,
  };
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: 'Bearer abe659300918e8b67feb0088f2760f',
    },
    body: JSON.stringify(graphql),
  });
  const data = await response.json();
  return data;
}
