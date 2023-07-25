/* eslint-disable @next/next/no-img-element */
'use client';
import { useEffect, useMemo, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { DetailedMovieResponse, getMovies } from '@/services';
import ArrowLeft from '@/assets/arrow_left.svg';
import ImdbLogo from '@/assets/imdb_logo.svg';
import RottenLogo from '@/assets/rotten_logo.svg';
import MetacriticLogo from '@/assets/metacritic_logo.svg';
import HeartIcon from '@/assets/heart.svg';

export default function MovieDetail() {
  const params = useParams();
  const route = useRouter();
  const [movie, setMovie] = useState<DetailedMovieResponse>();
  const raters = useMemo(() => {
    return [
      {
        rater: 'Internet Movie Database',
        image: <ImdbLogo />,
        bgColor: 'bg-imdb_color',
      },
      {
        rater: 'Rotten Tomatoes',
        image: <RottenLogo />,
        bgColor: 'bg-rotten_color',
      },
      {
        rater: 'Metacritic',
        image: <MetacriticLogo className="w-[20px]" />,
        bgColor: 'bg-white',
      },
    ];
  }, []);

  useEffect(() => {
    if (params?.id) {
      getMovies(`i=${params?.id}`).then((res) => setMovie(res));
    }
  }, [params?.id]);

  return (
    <main className="flex min-h-screen flex-col container m-auto py-14 px-4">
      <div
        className="rounded-lg hover:bg-opacity-60 bg-opacity-0 bg-gray cursor-pointer w-max"
        onClick={() => route.back()}
      >
        <ArrowLeft />
      </div>
      <div className="flex text-gray items-center my-2">
        <p>
          {movie?.Runtime} • {movie?.Year} •{' '}
          <span className="rounded-md p-1 text-xs bg-gray text-black">
            {movie?.Rated}
          </span>
        </p>
      </div>

      <div className="flex mt-4 flex-col-reverse sm:flex-row">
        <div className="w-full sm:w-[65%] text-white sm:pr-10 my-4">
          <h1 className="text-3xl sm:text-6xl line-clamp-2 font-bold">
            {movie?.Title}
          </h1>
          <div className="flex my-4 w-max flex-wrap max-w-full">
            {raters.map((rater) => {
              const raterFiltered = movie?.Ratings.find(
                (rate) => rate.Source === rater.rater,
              );
              if (raterFiltered) {
                return (
                  <div
                    className="flex rounded-md border border-solid border-[#171C21] min-w-[130px] w-max place-items-center overflow-hidden mr-4 mb-2"
                    key={rater.rater}
                  >
                    <div
                      className={`${rater.bgColor} p-3 w-100 h-[50px] grid place-items-center w-1/2`}
                    >
                      {rater.image}
                    </div>
                    <p className="p-3">{raterFiltered.Value}</p>
                  </div>
                );
              }
            })}
            <button className="flex rounded-md border border-solid border-[#171C21] w-max place-items-center p-3 mb-2">
              <HeartIcon className="fill-gray mr-2" />
              <p className="text-gray">Add to favorites</p>
            </button>
          </div>

          <p className="text-gray mt-8 mb-2">Plot</p>
          <p>{movie?.Plot}</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-8">
            <div>
              <p className="text-gray mb-2">Cast</p>
              {movie?.Actors?.split(',')?.map((actor) => (
                <p key={actor}>{actor}</p>
              ))}
            </div>
            <div>
              <p className="text-gray mb-2">Genre</p>
              {movie?.Genre?.split(',')?.map((genre) => (
                <p key={genre}>{genre}</p>
              ))}
            </div>
            <div>
              <p className="text-gray mb-2">Director</p>
              {movie?.Director?.split(',')?.map((director) => (
                <p key={director}>{director}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full sm:w-[35%]">
          <img
            src={movie?.Poster}
            alt={movie?.Title}
            width={360}
            height={508}
            className="object-contain w-full h-full flex ml-auto rounded-lg"
          />
        </div>
      </div>
    </main>
  );
}
