import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type ICity from "../Models/ICity.ts";
import API_ENV from "../env/index.ts";


export const cityApi = createApi({
    reducerPath: "cityApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${API_ENV.API_BASE_URL}/api/`,

    }),
    tagTypes: ["City"],
    endpoints: (build)=>({
        fetchAllCities: build.query<ICity[], void>({
            query: ()=>({
                url: "cities"
            })
        })
    })
})