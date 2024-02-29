import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

test("Should load contact us component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});

test("Should load button contact us component", () => {
  render(<Contact />);

  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
});

test("Should load input with placeholder Your Name contact us component", () => {
  render(<Contact />);

  //QUERYING
  const inputYourName = screen.getByPlaceholderText("Your Name");
  //ASSERTION
  expect(inputYourName).toBeInTheDocument();
});
