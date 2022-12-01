import { render } from "@testing-library/react";
import { UserRegistration } from "../UserRegistration";

describe("UserLogin component", () => {
  it("renders component successfully", () => {
    expect(render(<UserRegistration />)).toBeTruthy();
  });
});
