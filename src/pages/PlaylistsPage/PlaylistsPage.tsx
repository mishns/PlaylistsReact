import { default as React, FC } from "react";
import styles from "./playlistspage.css";
import { PLAYLISTS } from "../../data/playlists";
import { Link } from "react-router-dom";

interface PlaylistsPageProps {}

export const PlaylistsPage: FC<PlaylistsPageProps> = () => {
  const filteredPlaylists = PLAYLISTS.filter(list => list.genre != "Non Music");
  return (
    <div className={styles.PlaylistsPage}>
      <h2>Playlists Page</h2>
      {filteredPlaylists.map(({ id, name }) => (
        <Link to={`/playlists/${id}`} key={id}>
          {" "}
          {name}{" "}
        </Link>
      ))}

      <div className={styles.Playlists}></div>
    </div>
  );
};
