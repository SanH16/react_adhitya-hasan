import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "e7ce2b97-d0c1-4a75-9c1d-e6dfc8441836",

    productName: "John",

    productCategory: "Doe",

    productFreshness: "Doe",

    priceProduct: "Doe",

    image: "Doe",

    textDescription: "Doe",
  },
];

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, { payload }) => {
      const { id, productName, productCategory, priceProduct, productFreshness, image, textDescription } = payload;
      const newProduct = {
        id,
        productName,
        productCategory,
        priceProduct,
        productFreshness,
        image,
        textDescription,
      };
      state.push(newProduct);
    },

    deleteProduct: (state, { payload }) => {
      const { id } = payload;
      const filteredTask = state.filter((task) => task.id !== id);
      return filteredTask;
    },

    changeProduct: (state, { payload }) => {
      const { id, productName, productCategory, priceProduct, productFreshness, image, textDescription } = payload;
      if (productName || productName === "") {
        state.map((product) => {
          if (productName.id === id) {
            product.productName = productName;
            product.productCategory = productCategory;
            product.priceProduct = priceProduct;
            product.productFreshness = productFreshness;
            product.image = image;
            product.textDescription = textDescription;
          }
          return product;
        });
      }
    },
  },
});

export const selectProduct = (state) => state.products;

export const { addProduct, deleteProduct, changeProduct } = productSlice.actions;
export default productSlice.reducer;
