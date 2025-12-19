import {
  renderHook,
  waitFor,
} from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { useWeather } from "./useWeather";

describe("useWeather - functionality tests", () => {
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

  global.fetch = vi.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockdata),
    })
  );

  it("should fetch called", async () => {
    const { result } = renderHook(() => useWeather());
    await result.current.fetchcurrentweather("xyz");
    expect(global.fetch).toHaveBeenCalled();
  });

  it("should fetch called with correct response", async () => {
    const { result } = renderHook(() => useWeather());
    await result.current.fetchcurrentweather("xyz");
    expect(global.fetch).toHaveBeenCalledWith("xyz");
    await waitFor(() => {
      expect(result.current.data).toBe(mockdata);
    });
  });
});

describe("useWeather - functionality tests", () => {
  it("should not fetch weather data and update state", async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: false,
      })
    );

    const { result } = renderHook(() => useWeather());
    await result.current.fetchcurrentweather("xyz");
    expect(global.fetch).toHaveBeenCalled();
    await waitFor(() => {
      expect(result.current.data).toBe(null);
    }); 
  });
});
