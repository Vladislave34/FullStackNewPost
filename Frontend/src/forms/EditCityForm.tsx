import { useLocation, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import UniversalForm from "./Form";
import FormikInput from "../UI/input";
import { cityApi } from "../services/cityService";
import type ICity from "../Models/ICity";

type CityForm = Omit<ICity, "id">;

const CityEdit = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const city : ICity = location.state.city;
    console.log(city);

    const [updateCity] = cityApi.useUpdateCityMutation();

    if (!city) return <div>No city selected</div>;

    const initialValues: CityForm = {
        name: city.name,
        description: city.description,
    };

    return (
        <UniversalForm<CityForm>
            initialValues={initialValues}
            validationSchema={Yup.object({
                name: Yup.string().required("Required"),
                description: Yup.string().required("Required").min(5, "Too short"),
            })}
            onSubmit={async (values) => {
                await updateCity({ id: city.id, ...values });
                navigate("/cities");
            }}
            title="Edit City"
        >
            <FormikInput name="name" label="City Name" />
            <FormikInput name="description" label="Description" />
        </UniversalForm>
    );
};

export default CityEdit;