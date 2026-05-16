import { FaPlus } from 'react-icons/fa';
import Layout from '../layout/Layout';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../store/store';
import { openPopup } from '../../store/features/popup/popup.slice';
import { NAVBAR } from '../../constants/globalConstants';

const Navbar = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleOpenPopup = () => {
    return dispatch(openPopup({ isOpen: true, calledFrom: NAVBAR, id: null }));
  };
  return (
    <div className="sticky top-0 z-10 bg-base-200">
      <Layout>
        <div className="navbar bg-base-200 shadow-sm">
          <div className="navbar-start">
            <a className="btn btn-ghost text-xl">daisyUI</a>
          </div>
          <div className="navbar-end">
            <button className="btn btn-ghost btn-circle">
              <FaPlus onClick={handleOpenPopup} />
            </button>
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  className="size-[1.2em]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                  </g>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Navbar;
