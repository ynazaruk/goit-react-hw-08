import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchContacts } from "../redux/contacts/operations"
import { selectError, selectLoading } from "../redux/contacts/selectors"
import ContactList from "../components/ContactList/ContactList"
import ContactForm from "../components/ContactForm/ContactForm"
import SearchBox from "../components/SearchBox/SearchBox"

export default function ContactsPage() {
    const loading = useSelector(selectLoading)
    const error = useSelector(selectError)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])

    return (
        <div>
            <ContactForm />
            <SearchBox />
            {loading && <Loader />}
            <ContactList />
            {error && <ErrorMessage />}
        </div>

    )
}