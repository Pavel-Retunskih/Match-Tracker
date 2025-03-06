import {configureStore} from "@reduxjs/toolkit";
import {matchApi} from "../../pages/matchesList/api/appApi.ts";
import {appSlice} from "../slice/slice.ts";


export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    [matchApi.reducerPath]: matchApi.reducer, // ОБЯЗАТЕЛЬНО добавь сюда API reducer
  },
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(matchApi.middleware), // Добавь middleware
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch