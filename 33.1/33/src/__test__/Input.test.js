import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";
import userEvent from "@testing-library/user-event";
describe("Input", () => {
  test("the text field can contain both numbers and letters", async () => {
    const user = userEvent.setup();
    render(<App />);

    const input = screen.getByLabelText("Name");
    const button = screen.getByRole("button", { name: /Add/i });
    await user.type(input, "Test123");
    await user.click(button);
    expect( await screen.findByText("Test123")).toBeInTheDocument();
  });
});
