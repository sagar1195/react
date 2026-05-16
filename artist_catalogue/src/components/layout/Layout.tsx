import type { ChildrenProps } from '../../types';

const Layout = ({ children }: ChildrenProps) => {
  return <div className="max-w-7xl w-full m-auto ">{children}</div>;
};

export default Layout;
