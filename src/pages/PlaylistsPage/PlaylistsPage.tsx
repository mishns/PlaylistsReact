import { default as React, FC } from "react";
import styles from "./playlistspage.css";
import { PLAYLISTS } from "@data/playlists";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const PlaylistsPage: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const genre = queryParams.get("genre") || "";
  const name = queryParams.get("name") || "";

  function updateQueryParams(key: string, value: string): void {
    queryParams.set(key, value);
    const newSearch = `?${queryParams.toString()}`;
    navigate({ search: newSearch });
  }

  function handleGenreSearch(event: React.ChangeEvent<HTMLInputElement>): void {
    updateQueryParams("genre", event.target.value);
  }
  function handleNameSearch(event: React.ChangeEvent<HTMLInputElement>): void {
    updateQueryParams("name", event.target.value);
  }

  const filteredPlaylists = PLAYLISTS.filter(
    list =>
      list.genre != "Non Music" &&
      list.genre.toLowerCase().includes(genre.toLowerCase()) &&
      list.name.toLowerCase().includes(name.toLowerCase()),
  );
  return (
    <div className={styles.PlaylistsPage}>
      <h2>Playlists Page</h2>

      <div className={styles.GenreSearch}>
        <span>Введите жанр</span>
        <input type="text" onChange={handleGenreSearch} />
      </div>

      <div className={styles.NameSearch}>
        <span>Введите название</span>
        <input type="text" onChange={handleNameSearch} />
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
