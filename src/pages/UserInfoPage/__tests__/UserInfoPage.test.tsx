import React from "react";
import { UserInfoPage } from "@pages/UserInfoPage/UserInfoPage";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PLAYLISTS } from "@data/playlists";

const testUser = {
  id: 3,
  email: "Xander_Nienow59@hotmail.com",
  fullName: "Pablo Schaden",
  jobTitle: "Investor Brand Coordinator",
  avatar: "https://avatars.githubusercontent.com/u/30781235",
  bio: "Deserunt dolore provident. Eos reiciendis distinctio consectetur voluptatibus nemo laborum nulla. Alias corporis rerum laudantium. Veniam ullam tempore quia. Doloremque quis expedita natus officiis perferendis.",
  playlist: PLAYLISTS[3],
};

const route = "/users/";
const renderComponent = (route: string) =>
  render(
    <MemoryRouter initialEntries={[route]}>
      <Routes>
        <Route path="/users/:userId" element={<UserInfoPage />} />
      </Routes>
    </MemoryRouter>,
  );

describe("Проверка корректного рендера страницы пользователя в зависимости от query params", () => {
  const badIndex: string = "-1";
  test("В случае отсутствия пользователя в базе, отображается текст об отсутствии пользователя", () => {
    const { getByTestId } = renderComponent(route + badIndex);
    const message = getByTestId("NoUserMessage");
    expect(message.textContent).toEqual("Пользователя c таким id нет");
  });

  test("В случае, если пользователь есть в базе, отображаемые данные соответствуют данным в базе", () => {
    const { getByTestId } = renderComponent(route + testUser.id.toString());
    const email = getByTestId("UserEmail");
    const name = getByTestId("UserName");
    const playlistLink = getByTestId("UserPlaylistLink");

    expect(email.textContent).toEqual(testUser.email);
    expect(name.textContent).toEqual(testUser.fullName);
    expect(playlistLink).toHaveAttribute("href", `/playlists/${testUser.id}`);
  });
});
