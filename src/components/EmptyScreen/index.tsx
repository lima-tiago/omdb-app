import EmptyImage from '@/assets/empty_screen.svg';

export const EmptyScreen = () => {
  return (
    <div className="grid w-full place-items-center mt-20">
      <EmptyImage />
      <h1 className="text-white mb-2">Don't know what to search?</h1>
      <p className="text-gray">Here's an offer you can't refuse</p>
    </div>
  );
};
