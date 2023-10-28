import { render } from "@testing-library/react";
import FormProduct from "../components/create-product/FormProduct";

describe("FormProduct", () => {
  it("renders without crashing correctly", () => {
    const { container } = render(<FormProduct />);
    expect(container).toBeInTheDocument();
  });
});
