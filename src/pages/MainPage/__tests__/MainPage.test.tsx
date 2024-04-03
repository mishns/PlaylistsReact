import { MainPage } from "../MainPage";
import { render } from "@testing-library/react";
import React from "react";

const defaultProps = {};

const component = (props = {}) => {
  return render(<MainPage {...defaultProps} {...props} />);
};

describe("Проверка компонента MainPage", () => {
  test("Проверка корректного рендера главной страницы", () => {
    const { container } = component();
    expect(container).toMatchSnapshot();
  });
});
