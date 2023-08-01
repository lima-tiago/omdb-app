/* eslint-disable @next/next/no-img-element */
import { DetailedMovieResponse } from '@/services';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Heart from '@/assets/heart.svg';
import HeartFilled from '@/assets/HeartFilled.svg';

type MoviesListProps = {
  movies?: DetailedMovieResponse[];
};

export const MoviesList = ({ movies }: MoviesListProps) => {
  const [favorites, setFavorites] = useState<Array<string>>([]);

  function handleFavoriteMovie(movieId: string) {
    const isFavorited = favorites.includes(movieId);
    if (!isFavorited) {
      setFavorites([...favorites, movieId]);
      localStorage.setItem(
        'favorites',
        JSON.stringify([...favorites, movieId]),
      );
    } else {
      const favoritesFiltered = favorites.filter((item) => item !== movieId);
      setFavorites(favoritesFiltered);
      localStorage.setItem('favorites', JSON.stringify(favoritesFiltered));
    }
  }

  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) setFavorites(JSON.parse(savedFavorites));
  }, []);

  return (
    <div
      className="w-full grid place-items-center grid-cols-[repeat(auto-fit,_140px)] gap-4"
      data-testid="list-movies"
    >
      {movies?.map((movie) => (
        <div
          className="w-36 h-48 relative rounded-lg overflow-hidden bg-gray group"
          key={movie?.id}
        >
          <Link href={`/detail/${movie?.id}`}>
            <img
              src={movie?.poster}
              alt={movie?.title}
              width={140}
              height={190}
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 z-10 bg-[#192228] bg-opacity-90 w-full h-full justify-end flex flex-col p-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-white line-clamp-2 text-xs">{movie?.title}</p>
              <span className="text-gray text-xs">{movie?.year}</span>
            </div>
          </Link>
          <button
            className="absolute top-2 right-2 z-10"
            onClick={() => handleFavoriteMovie(movie?.imdbID)}
          >
            {favorites.includes(movie?.imdbID) ? <HeartFilled /> : <Heart />}
          </button>
        </div>
      ))}
    </div>
  );
};
