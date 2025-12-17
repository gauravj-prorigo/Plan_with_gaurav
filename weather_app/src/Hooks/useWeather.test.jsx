import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { useWeather } from "./useWeather";

describe("useWeather - functionality tests", () => {
  it("should fetch weather data and update state", async () => {
    const mockResponse = {
      location: { name: "Pune" },
      current: { temp_c: 30 },
    };

    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse),
      })
    );

    const { result } = renderHook(() => useWeather());

    await act(async () => {
      await result.current.fetchcurrentweather("test-url");
    });

    expect(fetch).toHaveBeenCalledOnce();
    expect(result.current.data).toEqual(mockResponse);
    expect(result.current.loading).toBe(false);
  });

  it("should handle API failure correctly", async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: false,
      })
    );

    const { result } = renderHook(() => useWeather());

    await act(async () => {
      await result.current.fetchcurrentweather("wrong-url");
    });

    expect(fetch).toHaveBeenCalledOnce();
    expect(result.current.data).toBe(null);
    expect(result.current.loading).toBe(false);
  });
});
