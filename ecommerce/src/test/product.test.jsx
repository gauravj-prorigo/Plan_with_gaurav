import { render, screen } from "@testing-library/react";
import { describe, expect, test, beforeAll, vi } from "vitest";
import Product from "../subcomponenets/Product";
import { ProductProvider } from "../context/ProductContext";
import { BrowserRouter } from "react-router";

  global.localStorage = {
    getItem: vi.fn(() => "[]"),
    setItem: vi.fn(),
  };

const mockProduct = {
    id: 5,
    name: "Power Grip Trainers",
    price: 4599,
    image:
      "https://images.unsplash.com/photo-1584735175097-719d848f8449",
    description:
      "Strong and durable trainers built for workouts.",
    reviews: [
      "Excellent grip during workouts.",
      "Provides good ankle support.",
      "Perfect shoes for gym sessions."
    ]
  };
  
describe("cart test", () => {
  test("check cart is render or not", () => {
    render(
      <BrowserRouter>
        <ProductProvider>
          <Product product={mockProduct} />
        </ProductProvider>
      </BrowserRouter>
    );

    expect(screen.getByText(/4599/i)).toBeInTheDocument();
    expect(screen.getByText(/Power Grip Trainers/i)).toBeInTheDocument();
    expect(screen.getByText(/Strong and durable trainers built for workouts./i)).toBeInTheDocument();
  });
});
