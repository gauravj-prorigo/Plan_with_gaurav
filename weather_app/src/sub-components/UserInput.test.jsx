import { fireEvent, render, screen, waitFor } from "@testing-library/react";
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

  it("check user can type", () => {
    const setcity = vi.fn();
    render(<UserInput setcity={setcity} />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "Gaurav" } });
    expect(setcity).toHaveBeenCalled();
  });

  it("check user can click backspece", () => {
    const setcity = vi.fn();
    render(<UserInput setcity={setcity} />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "Gaurav" } });
    fireEvent.change(input, { target: { value: "Gaura" } });
    expect(setcity).toHaveBeenCalledWith("Gaura");
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
    render(
      <UserInput city="Nanded" setcity={vi.fn()} fetchcurrentweather={api} />
    );
    fireEvent.click(screen.getByRole("button"));
    expect(api).toHaveBeenCalled();
    
  });
});
