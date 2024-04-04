import { default as React, FC } from "react";
import styles from "./playlistspage.css";
import { PLAYLISTS } from "@data/playlists";
import { Link, useSearchParams } from "react-router-dom";

export const PlaylistsPage: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const listGenre = searchParams.get("listGenre") || "";
  const listName = searchParams.get("listName") || "";

  function handleGenreSearch(event: React.ChangeEvent<HTMLInputElement>): void {
    searchParams.set("listGenre", event.target.value);
    console.log(searchParams.toString());

    setSearchParams(searchParams);
  }
  function handleNameSearch(event: React.ChangeEvent<HTMLInputElement>): void {
    searchParams.set("listName", event.target.value);
    setSearchParams(searchParams);
  }

  const filteredPlaylists = PLAYLISTS.filter(
    list =>
      list.genre != "Non Music" &&
      list.genre.toLowerCase().includes(listGenre.toLowerCase()) &&
      list.name.toLowerCase().includes(listName.toLowerCase()),
  );
  return (
    <div className={styles.PlaylistsPage}>
      <h2>Playlists Page</h2>

      <div className={styles.GenreSearch}>
        <span>Введите жанр</span>
        <input
          type="text"
          onChange={handleGenreSearch}
          data-testid="genreInput"
        />
      </div>

      <div className={styles.NameSearch}>
        <span>Введите название</span>
        <input
          type="text"
          onChange={handleNameSearch}
          data-testid="nameInput"
        />
      </div>

      <ul className={styles.Playlists}>
        {filteredPlaylists.map(({ id, name }) => (
          <li key={id}>
            <Link to={`/playlists/${id}`}> {name} </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
