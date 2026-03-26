import { useLocation, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import UniversalForm from "./Form";
import FormikInput from "../UI/TextInput.tsx";
import { cityApi } from "../services/cityService";
import type ICity from "../Models/ICity";
import FormikFileInput from "../UI/FileInput.tsx";
import ImagePreview from "../UI/ImagePreview.tsx";

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
        image: undefined,
    };

    return (
        <UniversalForm<CityForm>
            initialValues={initialValues}
            validationSchema={Yup.object({
                name: Yup.string().required("Required"),
                description: Yup.string().required("Required").min(5, "Too short"),
                image: Yup.mixed().nullable()
            })}
            onSubmit={async (values) => {
                await updateCity({ id: city.id, ...values });
                navigate("/cities");
            }}
            title="Edit City"
        >
            <FormikInput name="name" label="City Name" />
            <FormikInput name="description" label="Description" />

            <FormikFileInput name="image" label="Image" />
            {typeof city.image === "string" && (
                <ImagePreview src={city.image} />
            )}
        </UniversalForm>
    );
};

export default CityEdit;