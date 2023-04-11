/* eslint-disable testing-library/no-render-in-setup */
import { render,  screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";

describe('Header Tests', () => {
    let header;
    beforeEach(() => {
        render(<Header />);
        header = screen.getByText(/Emoji Search/i);
    })

    test('should render Header component without crashing', () => {
        expect(header).toBeInTheDocument();
    })
})
