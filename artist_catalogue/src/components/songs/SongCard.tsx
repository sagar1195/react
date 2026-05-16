import { MdDelete, MdEdit } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../store/store';
import { openPopup } from '../../store/features/popup/popup.slice';
import {
  DELETE_SONG,
  UPDATE_SONG_DETAILS,
} from '../../constants/globalConstants';
import type { SongData } from '../../types';
import {
  apiSlice,
  useUpdateSongsMutation,
} from '../../store/features/api/apiSlice';
import Toasts from '../toast/Toasts';
import Loading from '../loading/Loading';

const SongCard = ({
  song,
  album,
  profileUrl,
  lyrics,
  artist,
  id,
}: SongData) => {
  const [updateFav, { isLoading, isError }] = useUpdateSongsMutation();

  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector(apiSlice.endpoints.getSongs.select(undefined));
  const existing = id
    ? (data as SongData[])?.find((item) => item.id === id)
    : null;

  if (isLoading) return <Loading>Updating Song...</Loading>;
  if (isError)
    return <Toasts message="Error updating song" className="error" />;

  const handleOpenSongPopup = () => {
    return dispatch(
      openPopup({
        isOpen: true,
        calledFrom: UPDATE_SONG_DETAILS,
        id: id ?? null,
      }),
    );
  };

  const handleOpenDeleteSongPopup = () => {
    return dispatch(
      openPopup({ isOpen: true, calledFrom: DELETE_SONG, id: id ?? null }),
    );
  };

  const handleFavSong = async () => {
    try {
      return await updateFav({ ...existing, fav: !existing?.fav, id });
    } catch (e) {
      console.log('Something went wrong while updating the favorite song', e);
      return;
    }
  };

  return (
    <li className="list-row">
      <div>
        <img className="size-10 rounded-box" src={profileUrl} />
      </div>
      <div>
        <div>
          {song} - <span className="text-gray-500">{artist}</span>
        </div>
        <div className="text-xs uppercase font-semibold opacity-60">
          {album}
        </div>
      </div>
      <p className="list-col-wrap text-xs">{lyrics.substring(0, 200)}</p>
      <button
        onClick={handleOpenSongPopup}
        className="btn btn-square btn-ghost "
      >
        <MdEdit className="text-xl" />
      </button>
      <button
        onClick={handleOpenDeleteSongPopup}
        className="btn btn-square btn-ghost "
      >
        <MdDelete className="text-xl" />
      </button>
      <button onClick={handleFavSong} className="btn btn-square btn-ghost">
        <svg
          className="size-[1.2em]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2"
            fill={existing?.fav ? 'red' : 'none'}
            stroke="currentColor"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
          </g>
        </svg>
      </button>
    </li>
  );
};

export default SongCard;
