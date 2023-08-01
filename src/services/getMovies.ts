export type DetailedMovieResponse = {
  id: string;
  actors?: string;
  director?: string;
  genre?: string;
  plot?: string;
  poster?: string;
  rated?: string;
  ratings?: {
    Source: string;
    Value: string;
  }[];
  runtime?: string;
  title?: string;
  year?: string;
  imdbID: string;
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
