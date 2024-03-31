import { default as React, FC } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import styles from "./app.css";
import { MainPage, UserInfoPage, UsersPage } from "./pages";
import { PlaylistsPage } from "@pages/PlaylistsPage";
import { PlaylistInfoPage } from "@pages/PlaylistInfoPage";

export const App: FC = () => {
  return (
    <BrowserRouter>
      <footer className={styles.Header}>_</footer>

      <section className={styles.Section}>
        <nav className={styles.NavMenu}>
          <Link to={"/"}>Главная</Link>
          <Link to={"/users"}>Пользователи</Link>
          <Link to={"/playlists"}>Плейлисты</Link>
        </nav>

        <main className={styles.Content}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/users/:userId" element={<UserInfoPage />} />
            <Route path="/playlists" element={<PlaylistsPage />} />
            <Route path="/playlists/:id" element={<PlaylistInfoPage />} />
          </Routes>
        </main>
      </section>
    </BrowserRouter>
  );
};
