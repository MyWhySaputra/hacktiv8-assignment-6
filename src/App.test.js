import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

test("renders App component with NavBar, image banner, and Footer", async () => {
  render(<App />);

  // Check if image banner is rendered
  const banner = screen.getByTestId("image-banner");
  expect(banner).toBeInTheDocument();
  expect(banner).toHaveAttribute(
    "src",
    "https://www.instacart.com/company/wp-content/uploads/2022/11/cooking-statistics-hero.jpg"
  );
  expect(banner).toHaveAttribute("alt", "banner");

  // Check if NavBar is rendered
  const title = screen.getByTestId("my-recipe");
  expect(title).toBeInTheDocument();
  expect(title).toHaveTextContent("My Recipe");

  // Test Search Form
  const searchForm = screen.getByTestId("form-search");
  expect(searchForm).toBeInTheDocument();

  // Test Search Input and Submission
  const input = screen.getByPlaceholderText("Recipe Name");
  const submitButton = screen.getByRole("button", { name: /search/i });

  // Input text
  fireEvent.change(input, { target: { value: "Pancakes" } });
  expect(input.value).toBe("Pancakes");

  // Simulate form submission
  fireEvent.click(submitButton);

  // Check if the input is cleared after submission
  expect(input.value).toBe("");

  // Check if Footer is rendered
  const footerText = screen.getByTestId("footer-text");
  expect(footerText).toBeInTheDocument();
  expect(footerText).toHaveTextContent(
    "© 2024 Company, Inc. All rights reserved."
  );

  // Test Facebook link
  const facebookLink = screen.getByTestId("link-facebook");
  expect(facebookLink).toBeInTheDocument();
  expect(facebookLink).toHaveAttribute("href", "https://facebook.com");

  // Test X (Twitter) link
  const xLink = screen.getByTestId("link-x");
  expect(xLink).toBeInTheDocument();
  expect(xLink).toHaveAttribute("href", "https://x.com");

  // Test Instagram link
  const instagramLink = screen.getByTestId("link-instagram");
  expect(instagramLink).toBeInTheDocument();
  expect(instagramLink).toHaveAttribute("href", "https://instagram.com/");
  
});
