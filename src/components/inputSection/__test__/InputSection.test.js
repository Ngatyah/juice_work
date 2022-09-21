import { render, screen } from "@testing-library/react";
import InputSection from '../InputSection';

describe("Test InputSection component", () => {
    test("render ButtonCard with two buttons", async () => {
        render(<InputSection />);
        const userInput = await screen.findByTestId("input");
    });
});
