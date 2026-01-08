import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect } from "vitest";
import OurTeam from "../componentes/OurTeam";
import { act } from "react";
import { BrowserRouter } from "react-router";
import { ProductProvider } from "../context/ProductContext";

describe("Ourteam componenet", () => {
  global.localStorage = {
    getItem: vi.fn(() => "[]"),
    setItem: vi.fn(),
  };

  vi.useFakeTimers();
  it("first test from ourteam", async () => {
    render(
      <BrowserRouter>
        <ProductProvider>
          <OurTeam />
        </ProductProvider>
      </BrowserRouter>
    );
    await act(() => {
      vi.runAllTimers();
    });
    expect(screen.getByText(/Street Pro Sneaker/)).toBeInTheDocument();
  });
});
