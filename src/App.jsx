import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/home/Home";
import { ContactsPage } from "./pages/contactsPage/ContactsPage";
import { Layout } from "./components/layout/Layout";
import { RegistrationPage } from "./pages/registrationPage/RegistrationPage";
import { LoginPage } from "./pages/loginPage/LoginPage";
import { NotFound } from "./pages/notFound/NotFoud";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefresh } from "./redux/auth/selectors";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import RestrictedRoute from "./components/restrictedRoute/RestrictedRoute";

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefresh);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? null : (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              component={<RegistrationPage />}
              redirectTo="/login"
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
