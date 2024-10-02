
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refreshUser } from "../../redux/auth/operations";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import { lazy, Suspense } from "react";
import Layout from '../Layout/Layout';
import css from "./App.module.css"
import RestrictedRoute from "../../routes/RestrictedRoute";
import PrivateRoute from "../../routes/PrivateRoute";


const HomePage = lazy(() => import("../../pages/HomePage"))
const RegistrationPage = lazy(() => import("../../pages/RegistrationPage"))
const LoginPage = lazy(() => import("../../pages/LoginPage"))
const ContactsPage = lazy(() => import("../../pages/ContactsPage"))



export default function App() {

  const dispatch = useDispatch()

  const isRefreshing = useSelector(selectIsRefreshing)

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

  return isRefreshing ? <div className={css.refreshingTxt}>Refreshing user, please wait...</div> : (
    <Layout>
      <Suspense fallback={<p>Page loading...</p>}>
        <div className={css.container}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RestrictedRoute component={<RegistrationPage />} redirectTo="/" />} />
            <Route path="/login" element={<RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />} />
            <Route path="/contacts" element={<PrivateRoute component={<ContactsPage />} redirectTo="/login" />} />
          </Routes>
        </div>
      </Suspense>
    </Layout>


  )
}