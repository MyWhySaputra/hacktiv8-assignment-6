import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Card from "./Card";

// Contoh recipe untuk testing
const mockRecipe = {
  id: 1,
  name: "Test Recipe",
  image: "https://example.com/image.jpg",
  rating: 4.5,
  tags: ["easy", "quick", "healthy"],
};

test("renders Card component with correct props", async () => {
  render(<Card el={mockRecipe} />);

  // Test gambar
  const recipeImage = screen.getByTestId("img-recipe-1");
  expect(recipeImage).toBeInTheDocument();
  expect(recipeImage).toHaveAttribute("src", "https://example.com/image.jpg");
  expect(recipeImage).toHaveAttribute("alt", "Test Recipe");

  // Test judul
  const recipeTitle = screen.getByTestId("title-recipe-1");
  expect(recipeTitle).toBeInTheDocument();
  expect(recipeTitle.innerHTML).toBe("Test Recipe");

  // Test rating
  const recipeRating = screen.getByTestId("rating-recipe-1");
  expect(recipeRating).toBeInTheDocument();
  expect(recipeRating.innerHTML).toBe("4.5");

  // Test link
  const recipeLink = screen.getByTestId("link-recipe-1");
  expect(recipeLink).toBeInTheDocument();
  expect(recipeLink).toHaveAttribute("href", "https://dummyjson.com/recipes/1");
});
