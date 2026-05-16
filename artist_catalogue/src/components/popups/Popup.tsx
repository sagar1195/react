import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../store/store';
import { closePopup } from '../../store/features/popup/popup.slice';
import { NAVBAR, UPDATE_SONG_DETAILS } from '../../constants/globalConstants';
import ArtistPopup from './ArtistPopup';
import DeleteSongPopup from './DeleteSongPopup';

const Popup = () => {
  const isOpen = useSelector((state: RootState) => state.popup.isOpen);
  const calledFrom = useSelector((state: RootState) => state.popup.calledFrom);
  const dispatch = useDispatch<AppDispatch>();

  // code for closing popup
  if (isOpen === false) return null;

  return (
    <div
      onClick={() => dispatch(closePopup())}
      className="fixed left-0 top-0 z-20 w-full h-full flex justify-center items-center bg-black/80"
    >
      {calledFrom === NAVBAR || calledFrom === UPDATE_SONG_DETAILS ? (
        <ArtistPopup />
      ) : (
        <DeleteSongPopup />
      )}
    </div>
  );
};

export default Popup;
