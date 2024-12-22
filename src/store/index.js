import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./ItemSlice";
import fetchStatusSlice from "./FetchStatusSlice";
import bagSlice from "./BagSlice";

const myntaraStore = configureStore({
  reducer: { items: itemSlice.reducer,
    fetchStatus:fetchStatusSlice.reducer,
    bag:bagSlice.reducer
   },
});


export default myntaraStore;
