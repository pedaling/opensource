import { render } from "@testing-library/react";

import DesignSystemUtils from "./design-system-utils";

describe("DesignSystemUtils", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<DesignSystemUtils />);
    expect(baseElement).toBeTruthy();
  });
});
