import {
    useFormik,
    FormikProvider,
    Form, type FormikValues,

} from "formik";
import * as Yup from "yup";
import type {ReactElement, ReactNode} from "react";

interface UniversalFormProps<T extends FormikValues> {
    initialValues: T;
    validationSchema: Yup.AnyObjectSchema;
    onSubmit: (values: T) => void;
    // children: ReactElement | ReactElement[];
    children: ReactNode;
    title?: string;
}

const UniversalForm = <T extends FormikValues>({
                                                   initialValues,
                                                   validationSchema,
                                                   onSubmit,
                                                   children,
                                                    title,
                                               }: UniversalFormProps<T>): ReactElement => {

    const formik = useFormik<T>({
        initialValues,
        validationSchema,
        onSubmit,
    });

    return (
        <FormikProvider value={formik}>
            <div className="max-w-md w-full mx-auto mt-10 p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg">
                {title && <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">{title}</h2>}

                <Form className="flex flex-col gap-4">
                    {children}

                    <button
                        type="submit"
                        className="mt-4 bg-blue-500 text-white py-2 rounded-xl font-medium hover:bg-blue-600 transition-colors duration-200"
                    >
                        Submit
                    </button>
                </Form>
            </div>
        </FormikProvider>
    );
};

export default UniversalForm;