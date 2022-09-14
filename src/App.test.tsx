import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from './App'

test("Positivo e Negativo", async () => {
  // ARRANGE
  render(<App />);

  // ACTw
  await userEvent.click(screen.getByText(/Positivo/i));
  


  /* await screen.findByRole("heading");

  // ASSERT
  expect(screen.getByRole("heading")).toHaveTextContent("hello there");
  expect(screen.getByRole("button")).toBeDisabled(); */
});