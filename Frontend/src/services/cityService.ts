import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type ICity from "../Models/ICity.ts";
import API_ENV from "../env/index.ts";
// import {serialize} from "object-to-formdata";


export const cityApi = createApi({
    reducerPath: "cityApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${API_ENV.API_BASE_URL}/api/`,

    }),
    tagTypes: ["City"],
    endpoints: (build)=>({
        fetchAllCities: build.query<ICity[], void>({
            query: ()=>({
                url: "cities",
                method: "GET"
            })
        }),
        addCity: build.mutation<void, Omit<ICity, "id">>({
            query: (model)=>{
                // const data = serialize(model);
                return{
                    url: "cities",
                    method: "POST",
                    body: {
                        "name": model.name,
                        "description": model.description
                    },
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            },
            invalidatesTags: ["City"]
        }),
        updateCity: build.mutation<void, ICity>({
            query: (model)=>{
                return{
                    url: "cities",
                    method: "PUT",
                    body: model
                }
            }
        })
    })
})