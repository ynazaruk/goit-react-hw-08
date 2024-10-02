import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import * as Yup from "yup";
import css from "./LoginForm.module.css"

export default function LoginForm() {
    const dispatch = useDispatch()
    const handleSubmit = (values, actions) => {
        dispatch(logIn(values));
        actions.resetForm();
    };

    const FeedbackSchema = Yup.object().shape({
        email: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("*Required"),
        password: Yup.string().min(8, "Too Short!").max(50, "Too Long!").required("*Required"),
    });

    return (
        <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={handleSubmit}
            validationSchema={FeedbackSchema}
        >
            <Form className={css.container} autoComplete="off">
                <div className={css.item}>
                    <label className={css.inputLabel}>Email</label>
                    <Field className={css.inputItem} type="text" name="email" />
                    <ErrorMessage className={css.error} name="email" component="span" />
                </div>

                <div className={css.item}>
                    <label className={css.inputLabel}>Password</label>
                    <Field className={css.inputItem} type="text" name="password" placeholder="min 8 symbols" />
                    <ErrorMessage className={css.error} name="password" component="span" />
                </div>

                <button className={css.btn} type="submit">Log in</button>
            </Form>
        </Formik>
    );

}