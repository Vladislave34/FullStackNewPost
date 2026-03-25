import { useFormikContext } from "formik";


interface FormikInputProps<T> {
    name: keyof T;   // ключ форми
    label: string;
    type?: string;
}

function FormikInput<T extends Record<string, string | number>>({
                                                        name,
                                                        label,
                                                        type = "text",
                                                    }: FormikInputProps<T>) {
    const { values, errors, touched, handleChange, handleBlur } = useFormikContext<T>();

    return (
        <div className="flex flex-col">
            <label className="mb-1">{label}</label>

            <input
                name={name as string} // TypeScript вимагає string
                type={type}
                value={values[name] as string | number} // кастуємо під input
                onChange={handleChange}
                onBlur={handleBlur}
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

export default FormikInput;