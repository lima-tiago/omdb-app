'use client';
import { useEffect, useState } from 'react';
import { Input, EmptyScreen, MoviesList, GlobalLoading } from '@/components';
import { DetailedMovieResponse, getMovies } from '@/services';
import IconSearch from '@/assets/FeSearch.svg';

export default function Home() {
  const [searchMovies, setSearchMovies] = useState('');
  const [movies, setMovies] = useState<Array<DetailedMovieResponse>>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const waitUser = setTimeout(() => {
      if (searchMovies) {
        setIsLoading(true);
        getMovies(`
          {
            allNewmovies(filter: {title: {matches: {pattern: "${searchMovies}"}}}) {
              id
              imdbid
              poster
              year
              title
            }
          }
        `).then((res) => {
          setIsLoading(false);
          setMovies(res?.data?.allNewmovies);
        });
      }
    }, 1000);

    return () => clearTimeout(waitUser);
  }, [searchMovies]);

  return (
    <main className="flex min-h-screen flex-col items-center container m-auto py-4 px-4">
      <Input
        type="text"
        className="w-full rounded-lg p-2 pl-8"
        icon={<IconSearch />}
        placeholder="Search movies..."
        value={searchMovies}
        onChange={(e) => setSearchMovies(e.target.value)}
      />
      {isLoading ? (
        <GlobalLoading />
      ) : (
        <>
          {movies?.length ? (
            <MoviesList movies={movies} />
          ) : (
            <EmptyScreen setSearchMovies={setSearchMovies} />
          )}
        </>
      )}
    </main>
  );
}
