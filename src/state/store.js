import { configureStore } from "@reduxjs/toolkit";
import { customReducer } from "./reducer";

const store = configureStore({
      reducer: {
            inputRedur: customReducer,
      }
})

export default store;