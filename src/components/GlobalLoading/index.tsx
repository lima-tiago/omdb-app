import LoadingIcon from '@/assets/LoadingIcon.svg';

export const GlobalLoading = () => {
  return (
    <div className="grid place-items-center w-full h-full">
      <LoadingIcon className="animate-spin -ml-1 mr-3 h-14 w-14 text-white" />
    </div>
  );
};
