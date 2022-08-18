import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("Test kook useFetchGifs", () => {
  test("Should return the initial state", () => {
    const { result } = renderHook(() => useFetchGifs("Los Simpson"));
    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("Should return an images array and isLoading in false", async () => {
    const { result } = renderHook(() => useFetchGifs("Los Simpson"));

    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );

    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
