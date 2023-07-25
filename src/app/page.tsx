'use client';
import { useEffect, useState } from 'react';
import { Input, EmptyScreen, MoviesList } from '@/components';
import { MoviesResponse, getMovies } from '@/services';
import IconSearch from '@/assets/fe_search.svg';

export default function Home() {
  const [searchMovies, setSearchMovies] = useState('');
  const [movies, setMovies] = useState<MoviesResponse>();

  useEffect(() => {
    const waitUser = setTimeout(() => {
      if (searchMovies) {
        getMovies(`s=${searchMovies}`).then((res) => setMovies(res));
      }
    }, 2000);

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
      {movies?.Search?.length ? (
        <MoviesList movies={movies?.Search} />
      ) : (
        <EmptyScreen />
      )}
    </main>
  );
}
