import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantCard from "../components/RestaurantCard";
import MOCK_DATA from "../mocks/restaurants.mock.json";

it("Should render restaurant card", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const restaurantName = screen.getByText("La Pino'z Pizza");

  expect(restaurantName).toBeInTheDocument();
});
