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
        const ws = new WebSocket('wss://app.ftoyd.com/fronttemp-service/ws')

        const listener = (e: MessageEvent) => {
          const data = JSON.parse(e.data)
          updateCachedData((draft) => {
            draft.data.matches = data.data
          })
        }

        try {
          await cacheDataLoaded;
          ws.addEventListener('message', listener)
          console.log('Websocket connected')
        } catch (err) {
          console.log(err)
          console.log('Websocket error')
        }
        await cacheEntryRemoved
        ws.removeEventListener('message', listener);
        ws.close()
        console.log('Websocket disconnect')
      }

    }),
  }),

});

export const {useGetMatchesQuery} = matchApi;
