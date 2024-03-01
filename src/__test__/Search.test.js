import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Body from "../components/Body";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import MOCK_RESTAURANTS_LIST from "../mocks/restaurantsList.mock.json";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_RESTAURANTS_LIST),
  });
});

it("Should search pizza from list of 20 and result be 3", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const resCardsBefore = screen.getAllByTestId("res-card");

  expect(resCardsBefore.length).toBe(20);

  const searchInput = screen.getByTestId("search-input");

  expect(searchInput).toBeInTheDocument();

  fireEvent.change(searchInput, { target: { value: "Pizza" } });

  const searchBtn = screen.getByTestId("search-btn");

  fireEvent.click(searchBtn);

  const resCardsAfter = screen.getAllByTestId("res-card");

  expect(resCardsAfter.length).toBe(3);
});
