import React from "react";
import { PlaylistsPage } from "@pages/PlaylistsPage/PlaylistsPage";
import { fireEvent, render } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import "@testing-library/jest-dom";

function renderComponent() {
  return render(
    <MemoryRouter initialEntries={["/playlists/"]}>
      <Routes>
        <Route path="/playlists/" element={<PlaylistsPage />} />
      </Routes>
    </MemoryRouter>,
  );
}

const defaultGenre = "Folk";
const defaultName = "Abraham";

const setSearchParamsMock = jest.fn();
jest.mock("react-router-dom", () => {
  return {
    ...jest.requireActual("react-router-dom"),
    useSearchParams: jest.fn(() => [
      new URLSearchParams({ listGenre: defaultGenre, listName: defaultName }),
      setSearchParamsMock,
    ]),
  };
});

describe("Проверка работы PlaylistsPage с queryParams", () => {
  test("При вводе жанра в поле поиска происходит корректный вызов setSearchParams", async () => {
    const { getByTestId } = renderComponent();
    const genreInput = getByTestId("genreInput");
    await fireEvent.input(genreInput, { target: { value: "pop" } });
    expect(setSearchParamsMock).toHaveBeenCalledWith(
      new URLSearchParams({ listGenre: "pop", listName: defaultName }),
    );
  });

  test("При вводе имени в поле поиска происходит корректный вызов setSearchParams", async () => {
    const { getByTestId } = renderComponent();
    const nameInput = getByTestId("nameInput");
    await fireEvent.input(nameInput, { target: { value: "Young" } });
    expect(setSearchParamsMock).toHaveBeenCalledWith(
      new URLSearchParams({ listGenre: defaultGenre, listName: "Young" }),
    );
  });
});
