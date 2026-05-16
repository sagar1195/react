import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../store/store';
import { closePopup } from '../../store/features/popup/popup.slice';
import { useDeleteSongMutation } from '../../store/features/api/apiSlice';
import Toasts from '../toast/Toasts';
import Loading from '../loading/Loading';

const DeleteSongPopup = () => {
  const dispatch = useDispatch<AppDispatch>();
  const id = useSelector((state: RootState) => state.popup.id);

  const [deleteSong, { isError, isLoading }] = useDeleteSongMutation();

  if (isError) {
    return <Toasts message="Something went wrong" className="error" />;
  }
  if (isLoading) return <Loading>Loading...</Loading>;

  const handleDeleteSong = async () => {
    if (id !== null) {
      try {
        await deleteSong(id);
        return dispatch(closePopup());
      } catch (error) {}
      console.log('error in handleDeleteSong');
      return dispatch(closePopup());
    } else {
      console.error('Id is null');
      return dispatch(closePopup());
    }
  };

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="card card-dash bg-base-100 w-96"
    >
      <div className="card-body">
        <h2 className="card-title">Delete Song</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-end flex gap-2 mt-4">
          <button onClick={handleDeleteSong} className="btn btn-primary">
            Yes
          </button>
          <button
            onClick={() => dispatch(closePopup())}
            className="btn btn-primary"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteSongPopup;
