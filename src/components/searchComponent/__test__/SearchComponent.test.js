import SearchComponent from '../SearchComponent';
import '../searchComponent.css';
import { render, screen } from "@testing-library/react";


describe("Test Search component is available", () => {
    test("Check if we have input component", async () => {
        render(<SearchComponent />);
        const searchInput = await screen.findByTestId("search-input");
        expect(searchInput).toBeInTheDocument();
    });

});
