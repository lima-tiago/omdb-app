import { Dispatch, SetStateAction } from 'react';

import EmptyImage from '@/assets/EmptyScreen.svg';

type EmptyScreenProps = {
  setSearchMovies: Dispatch<SetStateAction<string>>;
};

export const EmptyScreen = ({ setSearchMovies }: EmptyScreenProps) => {
  return (
    <div className="grid w-full place-items-center mt-20">
      <EmptyImage />
      <h1 className="text-white mb-2">Don't know what to search?</h1>
      <p className="text-gray">Here's an offer you can't refuse</p>
      <div className="flex flex-wrap items-center justify-center gap-4 my-6">
        <button
          className="text-white bg-[#f5f5f51f] p-4 rounded-lg"
          onClick={() => setSearchMovies('harry potter')}
        >
          Harry Potter
        </button>
        <button
          className="text-white bg-[#f5f5f51f] p-4 rounded-lg"
          onClick={() => setSearchMovies('The Fast and The Furious')}
        >
          The Fast and The Furious
        </button>
      </div>
    </div>
  );
};
