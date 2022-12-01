import { render } from "@testing-library/react";
import App from "../App";

describe("App startup", () => {
  it("renders the app successfully", () => {
    expect(render(<App />)).toBeTruthy();
  });
});
