export interface SongData {
  song: string;
  album: string;
  lyrics: string;
  profileUrl: string;
  artist: string;
  id?: number | null;
  fav: boolean;
}

export type ChildrenProps = {
  children: React.ReactNode;
};
