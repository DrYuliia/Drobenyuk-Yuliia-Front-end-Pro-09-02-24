import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Валідаційна схема для Yup
const validationSchema = Yup.object({
    name: Yup.string()
        .required("Ім'я обов'язкове для заповнення"),
    email: Yup.string()
        .email("Некоректний формат електронної пошти")
        .required("Електронна пошта обов'язкова для заповнення"),
    phone: Yup.string()
        .matches(/^[0-9]{12}$/, "Телефон має складатися з 12 цифр")
        .required("Телефон обов'язковий для заповнення"),
});

const MyForm = () => {
    return (
        <Formik
            initialValues={{ name: '', email: '', phone: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div>
                        <label htmlFor="name">Ім'я</label>
                        <Field type="text" name="name" />
                        <ErrorMessage name="name" component="div" />
                    </div>

                    <div>
                        <label htmlFor="email">Електронна пошта</label>
                        <Field type="email" name="email" />
                        <ErrorMessage name="email" component="div" />
                    </div>

                    <div>
                        <label htmlFor="phone">Телефон</label>
                        <Field type="text" name="phone" />
                        <ErrorMessage name="phone" component="div" />
                    </div>

                    <button type="submit" disabled={isSubmitting}>
                        Відправити
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default MyForm;
