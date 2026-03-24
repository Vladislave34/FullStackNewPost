import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {cityApi} from "../services/cityService.ts";

const rootReducer = combineReducers({
    [cityApi.reducerPath]: cityApi.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(
                cityApi.middleware,
            ),
    })
}


export type  RootState = ReturnType<typeof rootReducer>
export type  AppStore = ReturnType<typeof setupStore>
export type  AppDispatch = AppStore['dispatch'];