import {cityApi} from "../services/cityService.ts";
import type ICity from "../Models/ICity.ts";
import CityCard from "../UI/CityCard.tsx";



const CityList = () => {
    const { data, isLoading, error } = cityApi.useFetchAllCitiesQuery();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error</div>;


    return (
        <div className="
            grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
            gap-6 p-6
        ">
            {data?.map((city: ICity) => (
                <CityCard key={city.id} city={city} />
            ))}
        </div>
    );
};

export default CityList;