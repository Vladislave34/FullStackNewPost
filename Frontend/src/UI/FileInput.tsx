import { useFormikContext } from "formik";

interface FormikFileInputProps<T> {
    name: keyof T;
    label: string;
}

function FormikFileInput<T>({ name, label }: FormikFileInputProps<T>) {
    const { setFieldValue, errors, touched } = useFormikContext<T>();

    return (
        <div className="flex flex-col">
        <label className="mb-1">{label}</label>

            <input
    type="file"
    onChange={(e) => {
        if (e.currentTarget.files) {
            setFieldValue(name as string, e.currentTarget.files[0]);
        }
    }}
    className="border rounded-lg p-2"
        />

        {touched[name] && errors[name] && (
                <span className="text-red-500 text-sm">
                    {errors[name] as string}
                    </span>
            )}
        </div>
);
}

export default FormikFileInput;