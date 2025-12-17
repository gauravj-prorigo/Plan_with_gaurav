import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import UserInput from "./UserInput";

describe("check input and api been called ", () => {
  it("Check input is there", () => {
    render(<UserInput />);
    const Input = screen.getByRole("textbox");
    expect(Input).toBeInTheDocument();
  });

  it("check placeholder", () => {
    render(<UserInput />);
    const placeholder = screen.getByPlaceholderText("Enter the city name");
    expect(placeholder).toBeInTheDocument();
  });

  it("check search button", () => {
    render(<UserInput />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("check is error msg visible", () => {
    render(
      <UserInput city="" setcity={vi.fn()} fetchcurrentweather={vi.fn()} />
    );

    fireEvent.click(screen.getByRole("button"));
    const erromsg = screen.getByText("Enter the city name");
    expect(erromsg).toBeInTheDocument();
  });
  
  it("check api call", () => {
    const api = vi.fn();
    const city = "Nanded";
    render(
      <UserInput city="Nanded" setcity={vi.fn()} fetchcurrentweather={api} />
    );
    fireEvent.click(screen.getByRole("button"));
    expect(api).toHaveBeenCalled();
    expect(api).toHaveBeenCalledWith(expect.stringContaining(city));
  });
});
