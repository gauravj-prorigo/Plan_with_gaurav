import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import WeatherDetails from "./WeatherDetails";
import { ThemeProvider } from "../context/Themecontext";

describe("Weather component testing", () => {
  const mockdata = {
    location: {
      name: "Pimpri",
      region: "maharashtra",
      country: "India",
    },
    current: {
      temp_c: 29.3,
      temp_f: 84.8,
      is_day: 1,
      feelslike_c: 27.9,
      wind_kph: 9.4,
    },
  };
  it("is componet render correctly", () => {
    render(
      <ThemeProvider>
        <WeatherDetails data={mockdata} />
      </ThemeProvider>
    );
    const windicon = screen.getByTestId("windicon");
    expect(windicon).toBeInTheDocument();
  });

  it("api data render on compont correcetly ", () => {
    render(
      <ThemeProvider>
        <WeatherDetails data={mockdata} />
      </ThemeProvider>
    );
    const location = screen.getByTestId("location");
    const tempicon = screen.getByTestId("tempicon");
    const Humidityicon = screen.getByTestId("Humidityicon");
    const wind = screen.getByTestId("wind");
    expect(wind).toBeInTheDocument();
    expect(Humidityicon).toBeInTheDocument();
    expect(location).toBeInTheDocument();
    expect(tempicon).toBeInTheDocument();
    expect(screen.getByText(/Maharashtra/i)).toBeInTheDocument();
    expect(screen.getByText(/29.3/)).toBeInTheDocument();
    expect(screen.getByText(/27.9/)).toBeInTheDocument();
    expect(screen.getByText(/9.4/)).toBeInTheDocument();
  });
});
