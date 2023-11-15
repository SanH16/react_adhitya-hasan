import { fireEvent, render, screen } from "@testing-library/react";
import FormProduct from "../components/create-product/FormProduct";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";

describe("FormProduct", () => {
  it("should render form product correctly", () => {
    const { container } = render(
      <BrowserRouter>
        <Provider store={store}>
          <FormProduct />
        </Provider>
      </BrowserRouter>
    );

    expect(container).toBeInTheDocument();
  });

  it("should render input product name is correctly", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <FormProduct />
        </Provider>
      </BrowserRouter>
    );

    const inputs = screen.getAllByRole("textbox");
    expect(inputs.length).toEqual(2);
  });

  it("product name input should work correctly", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <FormProduct />
        </Provider>
      </BrowserRouter>
    );

    const productName = screen.getByLabelText(/product name/i);
    fireEvent.change(productName, { target: { value: "Nike air Jordan" } });
    expect(productName).toHaveValue("Nike air Jordan");
  });

  it("should render input field and work correctly", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <FormProduct />
        </Provider>
      </BrowserRouter>
    );

    const inputs = screen.getAllByRole("textbox");
    expect(inputs.length).toEqual(2);

    const productCategory = screen.getByRole("combobox");
    expect(productCategory).toBeInTheDocument();

    const flexradio = screen.getAllByRole("radio");
    expect(flexradio.length).toEqual(4);

    const textArea = screen.getByLabelText(/additional description/i);
    fireEvent.change(textArea, { target: { value: "Brand new in Box" } });
    expect(textArea).toHaveValue("Brand new in Box");

    const productPrice = screen.getByLabelText(/product price/i);
    fireEvent.change(productPrice, { target: { value: 100 } });
    expect(productPrice).toHaveValue(100);

    const submitButton = screen.getByRole("button", { name: /submit/i });
    expect(submitButton).toBeInTheDocument();
  });

  it("product name input must beetwen 10 and 25 characters, only using letters, numbers, underscore, and hyphen", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <FormProduct />
        </Provider>
      </BrowserRouter>
    );

    const productName = screen.getByLabelText(/product name/i);
    fireEvent.change(productName, { target: { value: "product name test" } });
    const regex = /^[a-zA-Z0-9_-]{10,25}$/ && /[!@#$%^&*()_+//\\{}]/;
    const inputProductName = productName.value;

    const validation = regex.test(inputProductName);
    expect(validation).toBe(false);
  });

  it("product name input must beetwen 10 and 25 characters", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <FormProduct />
        </Provider>
      </BrowserRouter>
    );

    const productName = screen.getByLabelText(/product name/i);
    fireEvent.change(productName, { target: { value: "Dua puluh empat karakter" } });
    const inputProductName = productName.value;

    expect(inputProductName.length).not.toBeGreaterThan(25);
  });
});
