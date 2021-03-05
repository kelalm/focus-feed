import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Home from "../pages/index";

// test("Check for Getting Started Text", () => {
//   const { getByText } = render(<Home />);
//   expect(
//     getByText(
//       "Focus Feed is a public pomodoro feed to motivate you to stay focused and track your progress over time."
//     )
//   ).toBeInTheDocument();
// });

it("Renders appropriately", () => {
  render(<Home />);
  expect(
    screen.getByRole("heading", { name: "Welcome to Focus Feed" })
  ).toBeInTheDocument();
});
