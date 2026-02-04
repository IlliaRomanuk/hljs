
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";



describe("App", () => {
    beforeEach(() => {
        render(<App/>);
    });
    test('the page has a TODO title', () => {
        expect(screen.getByText(/todo/i)).toBeInTheDocument();
    });
});