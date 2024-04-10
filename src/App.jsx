import { useDispatch, useSelector} from "react-redux";
import {useEffect, lazy, Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import Loader from "./components/Loader/Loader";
import Layout from "./components/Layout/Layout";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";
import { PrivateRoute } from "./components/PrivateRoute";
import { RestrictedRoute } from "./components/RestrictedRoute";


const Home = lazy(() => import ("./pages/Home/Home"));
const Contacts = lazy(() => import ("./pages/Contacts/Contacts"));
const Register = lazy(() => import ("./pages/Register/Register"));
const Login = lazy(() => import ("./pages/Login/Login"));

export default function App() {

  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader /> ) : (
      <div> 
      <Layout>
        <Suspense fallback={<Loader/>}> 
        <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/contacts"
              element={<PrivateRoute component={<Contacts />} redirectTo="/login" />}
            />
            <Route
              path="/register"
              element={<RestrictedRoute component={<Register />} redirectTo="/contacts" />}
            />
            <Route
              path="/login"
              element={<RestrictedRoute component={<Login />} redirectTo="/contacts" />}
            />
          </Routes>
    </Suspense>
    </Layout>  
    </div>
    );
}

