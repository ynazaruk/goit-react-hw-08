import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { addContact } from "../../redux/contacts/operations";
import toast, { Toaster } from 'react-hot-toast';
import * as Yup from "yup";
import css from "./ContactForm.module.css";

export default function ContactForm() {
    const dispatch = useDispatch();

    const handleSubmit = async (values, actions) => {
        const newContact = {
            name: values.username,
            number: values.number,
        };
        try {
            await dispatch(addContact(newContact)).unwrap();
            toast.success("Successfully added!");
            actions.resetForm();
        } catch (error) {
            toast.error("Failed to add contact");
        }
    };

    const FeedbackSchema = Yup.object().shape({
        username: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("*Required"),
        number: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("*Required"),
    });

    return (
        <Formik
            initialValues={{ username: "", number: "" }}
            onSubmit={handleSubmit}
            validationSchema={FeedbackSchema}
        >
            <Form className={css.container}>
                <div className={css.item}>
                    <label className={css.inputLabel}>Name</label>
                    <Field className={css.inputItem} type="text" name="username" />
                    <ErrorMessage className={css.error} name="username" component="span" />
                </div>

                <div className={css.item}>
                    <label className={css.inputLabel}>Number</label>
                    <Field className={css.inputItem} type="text" name="number" />
                    <ErrorMessage className={css.error} name="number" component="span" />
                </div>

                <button className={css.btn} type="submit">Add contact</button>
                <Toaster toastOptions={{
                    style: {
                        display: "flex",
                        marginTop: "70px"
                    },
                }}
                />
            </Form>
        </Formik>
    );
}