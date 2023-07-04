import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
function FormikYup() {
    const initialValues = { email: "", password: "" };
    const SignInSchema = yup.object().shape({
        email: yup.string().email().required("Email is Required"),
        password: yup.string().required("password is required").min(4,"Password is too short")
    })
    return (
        <Formik initialValues={initialValues}
            validationSchema={SignInSchema}
            onSubmit={(values) => console.log(values)}>
            {(formik) => {
                const { errors, touched, isValid } = formik;
                return (
                    <>
                        <h1>Sign In Form</h1>
                        <Form>
                            <label>Email</label>
                            <Field type="email" name="email" /><br/>
                            <ErrorMessage name="email" component="span" /><br/>
                            <label>Password</label>
                            <Field type="password" name="password" /><br/>
                            <ErrorMessage name="password" component="span" /><br/>
                            <button type="submit" disabled={!isValid}>Sign In</button>
                        </Form>
                    </>
                )
            }}

        </Formik>

    )
}
export default FormikYup;