import { render, screen } from "@testing-library/react";
import InputSection from '../InputSection';

describe("Test InputSection component", () => {
    test("Check if we have input component", async () => {

        render(<InputSection />);
        const userInput = await screen.findByTestId("input");
        expect(userInput).toBeInTheDocument();
    });

    test("Verify the output div is rendered", async () => {
        render(<InputSection />);
        const output = await screen.findByTestId("outputs");
        expect(output).toBeInTheDocument();
    });



});
