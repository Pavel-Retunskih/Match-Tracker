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
      async onCacheEntryAdded(_, {updateCachedData, cacheDataLoaded, cacheEntryRemoved}) {
        const ws = new WebSocket('wss://app.ftoyd.com/fronttemp-service/ws');

        const listener = (e: MessageEvent) => {
          try {
            const data = JSON.parse(e.data);
            if (data && data.data && Array.isArray(data.data)) {
              updateCachedData((draft) => {
                if (!draft.data) {
                  draft.data = {matches: []};
                }
                draft.data.matches = data.data;
              });
            } else {
              console.error("Invalid WebSocket data format:", data);
            }
          } catch (err) {
            console.error("Error parsing WebSocket message:", err);
          }
        };

        try {
          await cacheDataLoaded;

          ws.addEventListener('message', listener);

          ws.addEventListener('error', (event) => {
            console.error("WebSocket error:", event);
          });

          await cacheEntryRemoved;
        } catch (err) {
          console.error("Error in WebSocket connection:", err);
        } finally {

          ws.removeEventListener('message', listener);
          ws.close();
        }
      },
    }),
  }),
});

export const {useGetMatchesQuery} = matchApi;