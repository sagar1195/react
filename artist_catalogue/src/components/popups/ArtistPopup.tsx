import { useState } from 'react';
import type { SongData } from '../../types';
import {
  apiSlice,
  usePostSongsMutation,
  useUpdateSongsMutation,
} from '../../store/features/api/apiSlice';
import { closePopup } from '../../store/features/popup/popup.slice';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../store/store';
import Loading from '../loading/Loading';
import Toasts from '../toast/Toasts';
import { NAVBAR } from '../../constants/globalConstants';

const ArtistPopup = () => {
  const [postSong, { isLoading: isPosting, error: postError }] =
    usePostSongsMutation();
  const [updateSong, { isLoading, isError }] = useUpdateSongsMutation();
  const id = useSelector((state: RootState) => state.popup.id);
  const calledFrom = useSelector((state: RootState) => state.popup.calledFrom);
  const { data: songs } = useSelector(
    apiSlice.endpoints.getSongs.select(undefined),
  );
  const dispatch = useDispatch<AppDispatch>();

  const existing = id
    ? (songs as SongData[])?.find((item) => item.id === id)
    : null;
  const [formData, setFormData] = useState<SongData>({
    profileUrl: existing?.profileUrl ?? '',
    song: existing?.song ?? '',
    artist: existing?.artist ?? '',
    album: existing?.album ?? '',
    lyrics: existing?.lyrics ?? '',
    id: existing?.id ?? null,
    fav: existing?.fav ?? false,
  });

  if (isPosting) return <Loading>Adding Song...</Loading>;
  if (isLoading) return <Loading>Updating Song...</Loading>;
  if (postError)
    return <Toasts message="Error adding song" className="error" />;
  if (isError)
    return <Toasts message="Error updating song" className="error" />;

  const handleFormSubmit = async () => {
    if (id === null && calledFrom === NAVBAR) {
      try {
        await postSong(formData);
        return dispatch(closePopup());
      } catch (error) {
        console.log('Something went wrong while adding the song', error);
        return dispatch(closePopup());
      }
    } else {
      try {
        await updateSong({ ...formData, id });
        return dispatch(closePopup());
      } catch (e) {
        console.log('Something went wrong while updating the song', e);
        return dispatch(closePopup());
      }
    }
  };

  return (
    <fieldset
      onClick={(e) => e.stopPropagation()}
      className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
    >
      <legend className="fieldset-legend">Song Details</legend>

      <label className="label">Profile Url</label>
      <input
        value={formData.profileUrl}
        onChange={(e) =>
          setFormData({ ...formData, profileUrl: e.target.value })
        }
        name="profileUrl"
        type="url"
        className="input"
        placeholder="www.example.com"
      />

      <label className="label">Song</label>
      <input
        value={formData.song}
        onChange={(e) => setFormData({ ...formData, song: e.target.value })}
        name="song"
        type="text"
        className="input"
        placeholder="Song Name"
      />

      <label className="label">Artist</label>
      <input
        value={formData.artist}
        onChange={(e) => setFormData({ ...formData, artist: e.target.value })}
        name="artist"
        type="text"
        className="input"
        placeholder="Artist"
      />

      <label className="label">Album</label>
      <input
        value={formData.album}
        onChange={(e) => setFormData({ ...formData, album: e.target.value })}
        name="album"
        type="text"
        className="input"
        placeholder="Album"
      />

      <label className="label">Lyrics</label>
      <input
        value={formData.lyrics}
        onChange={(e) => setFormData({ ...formData, lyrics: e.target.value })}
        name="lyrics"
        type="text"
        className="input"
        placeholder="Lyrics..."
      />

      <button onClick={handleFormSubmit} className="btn btn-neutral mt-4">
        Submit
      </button>
    </fieldset>
  );
};

export default ArtistPopup;
