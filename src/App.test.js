import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders consulting brand heading", () => {
    render(<App />);
    const linkElement = screen.getByText(/gramlich software services/i);
    expect(linkElement).toBeInTheDocument();
});
