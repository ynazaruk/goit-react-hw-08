
import { useDispatch } from "react-redux";
import toast, { Toaster } from 'react-hot-toast';
import { deleteContact } from "../../redux/contacts/operations"
import css from "./Contact.module.css"

export default function Contact({ name, number, id }) {
    const dispatch = useDispatch()

    const delContact = () => {
        dispatch(deleteContact(id))
        toast.success("Successfully deleted!")
    }

    return (
        <div className={css.container}>
            <div className={css.info}>
                <p>{name}</p>
                <p>{number}</p>
            </div>
            <button className={css.btn} onClick={delContact}>Delete</button>
            <Toaster toastOptions={{
                style: {
                    display: "flex",
                    marginTop: "70px"
                },
            }}
            />
        </div>
    )
}