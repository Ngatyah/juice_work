// import { render, screen } from "@testing-library/react";
// import ButtonCard from "../ButtonCard";
// import { EXPANDABLE_H1, H1 } from "../../../constants";

// describe("Test ButtonCard component", () => {
//   test("render ButtonCard with two buttons", async () => {
//     render(<ButtonCard />);
//     const buttonList = await screen.findAllByRole("button");
//     expect(buttonList).toHaveLength(2);
//   });

//   test("H1 Button Functionality test", async () => {
//     render(<ButtonCard />);
//     const h1Button = await screen.findByTestId(H1);
//     expect(h1Button).toBeInTheDocument();
//   });

//   test("Expandable H1 Button Functionality test", async () => {
//     render(<ButtonCard />);
//     const eh1Button = await screen.findByTestId(EXPANDABLE_H1);
//     expect(eh1Button).toBeInTheDocument();
//   });
// });
