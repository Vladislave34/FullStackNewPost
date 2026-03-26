import type ICity from "../Models/ICity";
import {type FC, memo} from "react";
import {useNavigate} from "react-router-dom";
import {cityApi} from "../services/cityService.ts";

interface CityCardProps {
    city: ICity;
}

const CityCard : FC<CityCardProps> = ({ city }) => {
    const navigate = useNavigate();
    const [deleteCity] = cityApi.useDeleteCityMutation();
    return (
        <div className="
            w-72 p-5 rounded-2xl shadow-md bg-white
            border border-slate-200
            hover:shadow-xl hover:-translate-y-1
            transition-all duration-300
            dark:bg-slate-800 dark:border-slate-700
        ">
            <img
                src={city.image as string}
                alt={city.name}
                className="w-full max-w-xs rounded-2xl cursor-pointer transition-transform duration-300 hover:scale-105"

            />
            <h2 className="text-xl font-semibold text-slate-800 dark:text-white">
                {city.name}
            </h2>

            <p className="text-slate-500 mt-2">
                Description: {city.description}
            </p>

            <button className="
                mt-4 w-full py-2 rounded-xl
                bg-indigo-500 text-white
                hover:bg-indigo-600
                transition
            ">
                Details
            </button>
            <button className="
                mt-4 w-full py-2 rounded-xl
                bg-indigo-500 text-white
                hover:bg-indigo-600
                transition
            "
                    onClick={() => navigate(`/edit-city/${city.id}`, { state: { city } })}
            >
                Edit
            </button>
            <button className="
                mt-4 w-full py-2 rounded-xl
                bg-indigo-500 text-white
                hover:bg-indigo-600
                transition
            "
                    onClick={()=>deleteCity(city.id)}
            >
                Delete
            </button>
        </div>
    );
};

export default memo(CityCard);