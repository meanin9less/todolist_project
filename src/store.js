import { configureStore } from "@reduxjs/toolkit";
import toDoListSlice from "./toDoListSlice";

const store = configureStore({
    reducer:{
        toDoList: toDoListSlice.reducer
    }
});

export default store;