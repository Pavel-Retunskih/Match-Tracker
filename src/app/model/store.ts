import {configureStore} from "@reduxjs/toolkit";
import {matchApi} from "../../pages/matchesList/api/appApi.ts";


export const store = configureStore({
  reducer: {
    [matchApi.reducerPath]: matchApi.reducer, // ОБЯЗАТЕЛЬНО добавь сюда API reducer
  },
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(matchApi.middleware), // Добавь middleware
});
