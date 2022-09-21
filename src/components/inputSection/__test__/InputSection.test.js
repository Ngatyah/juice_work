import React from 'react'
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect';
import InputSection from '../InputSection';
import { EXPANDABLE_H1, H1 } from "../../../constants";

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

    it("Verify Data input change", async () => {
        render(<InputSection />);
        const input = await screen.findByTestId("input");
        fireEvent.change(input, { target: { value: "/1 this is nice" } });
        expect(input.value).toBe("/1 this is nice");
    });

    it("Verify heading select popup show and works as expected", async () => {
        render(<InputSection />);
        const input = await screen.findByTestId("input");
        fireEvent.change(input, { target: { value: "/1" } });

        const h1Button = await screen.findByTestId(H1);
        expect(h1Button).toBeInTheDocument();

        let eh1Button = await screen.findByTestId(EXPANDABLE_H1);
        expect(eh1Button).toBeInTheDocument();

        userEvent.click(h1Button)
        fireEvent.change(input, { target: { value: "Test adding H1 tag" } });
        fireEvent.keyDown(input, { key: 'Enter', code: 'Enter', charCode: 13 })
        expect(input.value).toBe("");
        const h1tag = await screen.findByTestId("h1-tag");
        expect(h1tag).toBeInTheDocument();
        expect(h1tag).toHaveTextContent('Test adding H1 tag');

        fireEvent.change(input, { target: { value: "/1" } });
        eh1Button = await screen.findByTestId(EXPANDABLE_H1);
        userEvent.click(eh1Button)
        fireEvent.change(input, { target: { value: "Test adding expandable H1 tag" } });
        fireEvent.keyDown(input, { key: 'Enter', code: 'Enter', charCode: 13 })
        expect(input.value).toBe("");
        const eh1tag = await screen.findByTestId("eh1-tag");
        expect(eh1tag).toBeInTheDocument();
        expect(eh1tag).toHaveTextContent('Test adding expandable H1 tag');
    });
});
