import { render } from "@testing-library/react";

import VibrantMotion from "./vibrant-motion";

describe("VibrantMotion", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<VibrantMotion />);
    expect(baseElement).toBeTruthy();
  });
});
