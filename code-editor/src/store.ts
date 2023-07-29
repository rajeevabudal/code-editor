import { configureStore } from "@reduxjs/toolkit";
import editor from "../src/components/redux/editor";
const store = configureStore({
  reducer: {
    getValue: editor,
  },
});

export default store;
