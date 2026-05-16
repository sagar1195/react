import type { ChildrenProps } from '../../types';

const Loading = ({ children }: ChildrenProps) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/80 flex justify-center items-center">
      <span className="loading loading-spinner loading-md"></span>
      {children}
    </div>
  );
};

export default Loading;
