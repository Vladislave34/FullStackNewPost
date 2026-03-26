
import * as Yup from "yup";
import type ICity from "../Models/ICity";
import UniversalForm from "./Form.tsx";
import FormikInput from "../UI/TextInput.tsx";
import {cityApi} from "../services/cityService.ts";
import {useNavigate} from "react-router-dom";
import FormikFileInput from "../UI/FileInput.tsx";
// import {useNavigate} from "react-router-dom";

// Тип форми без id
type CityForm = Omit<ICity, "id">;

const CityCreate = () => {
    const [addCity] = cityApi.useAddCityMutation();
    const navigate = useNavigate();

    return (
    <UniversalForm<CityForm>
        initialValues={{ name: "", description: "", image: null }}
        validationSchema={Yup.object({
            name: Yup.string().required("Required"),
            description: Yup.string().required("Required").min(5, "Too short")
        }) as Yup.ObjectSchema<CityForm>}
        onSubmit={async (values) => {
            await addCity({  ...values });
            navigate("/cities");
        }}
        title={"ADD CITY"}
    >
        <FormikInput name="name" label="City Name" />
        <FormikInput name="description" label="Description" />
        <FormikFileInput name="image" label="Image" />
    </UniversalForm>
    )
};

export default CityCreate;