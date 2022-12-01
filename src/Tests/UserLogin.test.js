import { render } from "@testing-library/react";
import { UserLogin } from "../UserLogin";

describe("UserLogin component", () => {
  it("renders component successfully", () => {
    expect(render(<UserLogin />)).toBeTruthy();
  });
});
