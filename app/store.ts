import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import productReducer from "../features/productSlice";

export const store = configureStore({
  reducer: {
    // this is where reducers added
    product: productReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type Rootstate = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  Rootstate,
  unknown,
  Action<string>
>;
