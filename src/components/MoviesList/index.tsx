/* eslint-disable @next/next/no-img-element */
import { MoviesListResponse } from '@/services';
import Link from 'next/link';
import Heart from '@/assets/Heart.svg';

type MoviesListProps = {
  movies?: MoviesListResponse[];
};

export const MoviesList = ({ movies }: MoviesListProps) => {
  return (
    <div
      className="w-full grid place-items-center grid-cols-[repeat(auto-fit,_minmax(140px,_1fr))] gap-4"
      data-testid="list-movies"
    >
      {movies?.map((movie) => (
        <Link
          href={`/detail/${movie.imdbID}`}
          className="w-36 h-48 relative rounded-lg overflow-hidden bg-gray"
          key={movie.imdbID}
        >
          <img
            src={movie.Poster}
            alt={movie.Title}
            width={140}
            height={190}
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 z-10 bg-[#192228] bg-opacity-90 w-full h-full justify-end flex flex-col p-2 opacity-0 hover:opacity-100 transition-opacity">
            <button className="absolute top-2 right-2">
              <Heart />
            </button>
            <p className="text-white line-clamp-2 text-xs">{movie.Title}</p>
            <span className="text-gray text-xs">{movie.Year}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};
