import { default as React, FC } from "react";
import styles from "./playlistinfopage.css";
import { Link, useParams } from "react-router-dom";
import { PLAYLISTS } from "@data/playlists";

export const PlaylistInfoPage: FC = () => {
  const { id } = useParams();
  const playlistData = PLAYLISTS.find(list => list.id === Number(id))!;

  if (!playlistData) {
    return <span data-testid="noPlaylistMessage">Такого списка нет</span>;
  }

  const { genre, name, songs } = playlistData;
  return (
    <div className={styles.PlaylistPage}>
      <h2 className={styles.PlaylistName} data-testid="playlistName">
        {name}
      </h2>
      <Link to={`/playlists/?listGenre=${genre}`} data-testid="playlistGenre">
        Жанр: {genre}
      </Link>
      <ul className={styles.Playlist} data-testid="playlistList">
        {songs.map((song: string, index: number) => (
          <li className={styles.PlaylistSong} key={index}>
            - {song}
          </li>
        ))}
      </ul>
    </div>
  );
};
