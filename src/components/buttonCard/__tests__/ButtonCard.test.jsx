import { render, screen } from "@testing-library/react";
import ButtonCard from "../ButtonCard";

describe("Test ButtonCard component", () => {
  test("render ButtonCard with two buttons", async () => {
    render(<ButtonCard />);
    const buttonList = await screen.findAllByRole("button");
    expect(buttonList).toHaveLength(2);
  });
});
