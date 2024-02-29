import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import appStore from "../store/appStore";
import "@testing-library/jest-dom";

it("Should load the header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
});
