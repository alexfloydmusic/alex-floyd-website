import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import songReducer from "../features/songs/songSlice";
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, songReducer);

export const store = configureStore({
  reducer: { songs: persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: songReducer,
      },
      serializableCheck: false,
    }),
});
