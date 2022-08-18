import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Test <GifGrid />", () => {
  const category = "Simpson";

  test("Should show loading", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    expect(screen.getByText("Loading..."));
    expect(screen.getByText(category));
  });

  test("Should show the elements when images are loaded from useFetchFigs", () => {
    const gifs = [
      {
        id: "ABC",
        title: "Homero",
        url: "https://localhost/Homero.jpg",
      },
      {
        id: "123",
        title: "Lisa",
        url: "https://localhost/Lisa.jpg",
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);
    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
