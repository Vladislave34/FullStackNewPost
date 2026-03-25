
import * as Yup from "yup";
import type ICity from "../Models/ICity";
import UniversalForm from "./Form.tsx";
import FormikInput from "../UI/input.tsx";
import {cityApi} from "../services/cityService.ts";
// import {useNavigate} from "react-router-dom";

// Тип форми без id
type CityForm = Omit<ICity, "id">;

const CityCreate = () => {
    const [addCity] = cityApi.useAddCityMutation();
    // const navigate = useNavigate();

    return (
    <UniversalForm<CityForm>
        initialValues={{ name: "", description: "" }}
        validationSchema={Yup.object({
            name: Yup.string().required("Required"),
            description: Yup.string().required("Required").min(5, "Too short")
        }) as Yup.ObjectSchema<CityForm>}
        onSubmit={ (values) => {addCity(values)}}
        title={"ADD CITY"}
    >
        <FormikInput name="name" label="City Name" />
        <FormikInput name="description" label="Description" />
    </UniversalForm>
    )
};

export default CityCreate;