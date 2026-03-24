import {cityApi} from "../services/cityService.ts";
import type ICity from "../Models/ICity.ts";



const Home = () => {
    const {data} = cityApi.useFetchAllCitiesQuery();
    const showCities  = (data?: ICity[]   ) => {
        return(
            <>
                {data?.map((item : ICity)  => (
                    <div key={item.id}></div>
                    ))}

            </>
            )

    }
    return (
        <div className="flex flex-col items-center justify-center bg-white">
            {showCities(data)}
        </div>
    );
};

export default Home;