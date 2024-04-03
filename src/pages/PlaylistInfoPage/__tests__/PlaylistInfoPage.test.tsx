import React from "react";
import { PlaylistInfoPage } from "../PlaylistInfoPage";
import { render } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import "@testing-library/jest-dom";

const testPlaylist = {
  id: 6,
  genre: "Folk",
  name: "Lovely Songs",
  songs: [
    "Say My Name",
    "Long Tall Sally",
    "American Woman",
    "Happy Together",
    "Toxic",
    "Secret Love",
    "He'll Have to Go",
    "Colors of the Wind",
    "Spill the Wine",
    "Blurred Lines",
    "My Prayer",
    "Whole Lotta Shakin' Goin' On",
    "The Loco-Motion",
    "Ben",
    "Family Affair",
    "Theme From 'Shaft'",
    "Just the Way You Are",
    "Queen of Hearts",
    "A Boy Named Sue",
    "We Are the World",
  ],
};

const route: string = "/playlists/";
const renderComponent = (route: string) =>
  render(
    <MemoryRouter initialEntries={[route]}>
      <Routes>
        <Route path="/playlists/:id" element={<PlaylistInfoPage />} />
      </Routes>
    </MemoryRouter>,
  );

describe("Проверка рендера страницы плейлиста в зависимости от query params", () => {
  const badIndex: string = "-1";
  test("В случае отсутствия плейлиста в базе отображается текст по умолчанию", () => {
    const { getByTestId } = renderComponent(route + badIndex);
    expect(getByTestId("noPlaylistMessage").textContent).toEqual(
      "Такого списка нет",
    );
  });

  test("В случае, если плейлист есть в базе, отображаемые данные соответствуют данным в базе", () => {
    const { getByTestId } = renderComponent(route + testPlaylist.id.toString());
    const genre = getByTestId("playlistGenre");
    const name = getByTestId("playlistName");
    const list = getByTestId("playlistList");

    expect(genre.textContent).toEqual("Жанр: " + testPlaylist.genre);
    expect(name.textContent).toEqual(testPlaylist.name);
    expect(list.childElementCount).toEqual(testPlaylist.songs.length);
  });
});
