import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Card from "./Card";

// Contoh recipe untuk testing
const el = {
  id: 1,
  name: "Test Recipe",
  image: "https://example.com/image.jpg",
  rating: 4.5,
  tags: ["Tag1", "Tag2", "Tag3"],
};

test("renders Card component with correct props", async () => {
  render(<Card el={el} />);

  // Test gambar
  const recipeImage = screen.getByTestId(`img-recipe-${el.id}`);
  expect(recipeImage).toBeInTheDocument();
  expect(recipeImage).toHaveAttribute("src", "https://example.com/image.jpg");
  expect(recipeImage).toHaveAttribute("alt", "Test Recipe");

  // Test judul
  const recipeTitle = screen.getByTestId(`title-recipe-${el.id}`);
  expect(recipeTitle).toBeInTheDocument();
  expect(recipeTitle.innerHTML).toBe("Test Recipe");

  // Test rating
  const recipeRating = screen.getByTestId(`rating-recipe-${el.id}`);
  expect(recipeRating).toBeInTheDocument();
  expect(recipeRating.innerHTML).toBe("4.5");

  // Test link
  const recipeLink = screen.getByTestId(`link-recipe-${el.id}`);
  expect(recipeLink).toBeInTheDocument();
  expect(recipeLink).toHaveAttribute("href", `https://dummyjson.com/recipes/${el.id}`);
});
