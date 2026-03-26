import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type ICity from "../Models/ICity.ts";
import API_ENV from "../env/index.ts";
import {serialize} from "object-to-formdata";
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
            }),
            providesTags: ["City"]
        }),
        fetchCityById: build.query<ICity, number>({
            query: (id)=>({
                url: `cities/${id}/`,
                method: "GET"
            }),
            providesTags: ["City"]
        }),
        addCity: build.mutation<void, Omit<ICity, "id">>({
            query: (model)=>{
                const data = serialize(model);
                return{
                    url: "cities/",
                    method: "POST",
                    body: data
                }
            },
            invalidatesTags: ["City"]
        }),
        updateCity: build.mutation<void, ICity>({
            query: (model)=>{
                const data = serialize<Omit<ICity, "id">>(model);
                return{
                    url: `cities/${model.id}/`,
                    method: "PUT",
                    body: data,
                }
            },
            invalidatesTags: ["City"]
        }),
        deleteCity: build.mutation<void, number>({
            query: (id)=>({
                url: `cities/${id}/`,
                method: "DELETE"
            }),
            invalidatesTags: ['City']
        })
    })
})