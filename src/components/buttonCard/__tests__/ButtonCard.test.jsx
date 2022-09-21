import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ButtonCard from "../ButtonCard";
import { EXPANDABLE_H1, H1 } from "../../../constants";
import "@testing-library/jest-dom/extend-expect";

describe("Test ButtonCard component", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test("render ButtonCard with two buttons", async () => {
    render(<ButtonCard />);
    const buttonList = await screen.findAllByRole("button");
    expect(buttonList).toHaveLength(2);
  });

  test("H1 Button Functionality test", async () => {
    const setType = jest.fn();
    const setText = jest.fn();
    render(
      <ButtonCard setType={setType} setText={setText} text="/1 test here" />
    );
    const h1Button = await screen.findByTestId(H1);
    expect(h1Button).toBeInTheDocument();

    await userEvent.click(h1Button);
    expect(setType.mock.calls.length).toBe(1);
    expect(setType).toHaveBeenCalledWith(H1);

    expect(setText.mock.calls.length).toBe(1);
    expect(setText).toHaveBeenCalledWith(" test here");
  });

  test("Expandable H1 Button Functionality test", async () => {
    const setType = jest.fn();
    const setText = jest.fn();
    render(
      <ButtonCard setType={setType} setText={setText} text="/1 test here" />
    );
    const eh1Button = await screen.findByTestId(EXPANDABLE_H1);
    expect(eh1Button).toBeInTheDocument();

    await userEvent.click(eh1Button);
    expect(setType.mock.calls.length).toBe(1);
    expect(setType).toHaveBeenCalledWith(EXPANDABLE_H1);

    expect(setText.mock.calls.length).toBe(1);
    expect(setText).toHaveBeenCalledWith(" test here");
  });
});
