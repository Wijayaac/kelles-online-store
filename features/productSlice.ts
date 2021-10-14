import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Rootstate } from "../app/store";

// here we typyng the types for the state
export type ProductState = {
  data: {
    id: number;
    title: string;
    price: string;
    category: string;
    description: string;
    image: string;
  }[];
  pending: boolean;
  error: boolean;
};
const initialState: ProductState = {
  data: [
    {
      id: 1,
      title: "nama",
      price: "100000",
      category: "baju",
      description: "loremawdmaw dxawjdaw dawlkasjdo",
      image: "ini gambar",
    },
    {
      id: 2,
      title: "nama",
      price: "100000",
      category: "baju",
      description: "loremawdmaw dxawjdaw dawlkasjdo",
      image: "ini gambar",
    },
  ],
  pending: false,
  error: false,
};

export const getProductItem = createAsyncThunk(
  "product/productItem",
  async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // leave this empty now
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductItem.pending, (state) => {
        state.pending = true;
      })
      .addCase(getProductItem.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.data = payload;
      })
      .addCase(getProductItem.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });
  },
});

export const selectProduct = (state: Rootstate) => state.product;

export default productSlice.reducer;
