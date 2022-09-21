import { render, screen } from "@testing-library/react";
import ButtonCard from "../ButtonCard";
import { H1 } from "../../../constants";

describe("Test ButtonCard component", () => {
  test("render ButtonCard with two buttons", async () => {
    render(<ButtonCard />);
    const buttonList = await screen.findAllByRole("button");
    expect(buttonList).toHaveLength(2);
  });

  test("H1 Button Functionality test", async () => {
    render(<ButtonCard />);
    const h1Button = await screen.findByTestId(H1);
  });
});
