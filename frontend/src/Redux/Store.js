import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productApi } from "./Api";



const store = configureStore({
 reducer: {
  [productApi.reducerPath]: productApi.reducer,
 },
 middleware: (getDefaultMiddleware) => {
  return getDefaultMiddleware().concat(productApi.middleware);
 },
});
setupListeners(store.dispatch);
export default store;