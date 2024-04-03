import React from "react";
import { UsersPage } from "@pages/UsersPage/UsersPage";
import { fireEvent, render } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import "@testing-library/jest-dom";

const setSearchParamsMock = jest.fn();
jest.mock("react-router-dom", () => {
  return {
    ...jest.requireActual("react-router-dom"),
    useSearchParams: jest.fn(() => [
      new URLSearchParams({ searchName: "" }),
      setSearchParamsMock,
    ]),
  };
});

const renderComponent = () =>
  render(
    <MemoryRouter initialEntries={["/users/"]}>
      <Routes>
        <Route path="/users/" element={<UsersPage />} />
      </Routes>
    </MemoryRouter>,
  );

test("UsersPage корректно вызывает setSearchParams", () => {
  const { getByTestId } = renderComponent();
  const paramInput = getByTestId("SearchNameInput");
  fireEvent.change(paramInput, { target: { value: "abraham" } });
  expect(setSearchParamsMock).toHaveBeenCalledWith({ searchName: "abraham" });
});