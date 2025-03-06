import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Match} from "../../../entities/match/model/type.ts";

export const matchApi = createApi({
  reducerPath: "matchApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://app.ftoyd.com/fronttemp-service",
  }),
  endpoints: (builder) => ({
    getMatches: builder.query<{ data: { matches: Match[] } }, void>({
      query: () => "/fronttemp",
    }),
  }),

});

export const {useGetMatchesQuery} = matchApi;
