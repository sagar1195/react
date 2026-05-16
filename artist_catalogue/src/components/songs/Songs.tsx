import { useEffect } from 'react';
import { useGetSongsQuery } from '../../store/features/api/apiSlice';
import type { SongData } from '../../types';
import Layout from '../layout/Layout';
import SongCard from './SongCard';
import Loading from '../loading/Loading';
import Toasts from '../toast/Toasts';

const Songs = () => {
  const { data, isLoading, isError } = useGetSongsQuery(undefined);

  useEffect(() => {
    console.log('song');
  }, []);

  if (isLoading) return <Loading>Loading...</Loading>;
  if (isError)
    return (
      <Toasts message="Error occured while fetching songs" className="error" />
    );

  return (
    <Layout>
      <ul className="list bg-base-100 rounded-box shadow-md">
        {(data as SongData[]).map((song) => (
          <SongCard key={song.id} {...song} />
        ))}
      </ul>
    </Layout>
  );
};

export default Songs;
