import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Test <GifItem />", () => {
  const title = "Homero Simpson";
  const url = "https://thesimpsons/homero-simpson.jpg";

  test("Should match with snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("Should show the image with url and ALT", () => {
    render(<GifItem title={title} url={url} />);
    // screen.debug();
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(alt);
  });

  test("Should show title in the component", () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
