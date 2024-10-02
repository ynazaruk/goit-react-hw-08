import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../redux/auth/selectors";


export default function HomePage() {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const user = useSelector(selectUser);

    return (
        <div>
            {isLoggedIn ? <h1>Welcome, {user.name}!</h1> : <h1> Welcome!</h1>} <h1>This is your own web Phonebook ☎️</h1>
            {!isLoggedIn ? <p>Before starting using the app please<br /><NavLink to="/register">Register</NavLink> for new users or <br /><NavLink to="/login">Log in</NavLink> whether you have already got your account</p>
                : <p>Click on Contacts above to find your Phonebook</p>}
        </div>

    )
}