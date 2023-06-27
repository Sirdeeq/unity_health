import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import SignupLogin from "../pages/SignupLogin";
import Dashboard from "../pages/Dashboard";
import { About, Contactus, Home, Services } from "../services/landingPage";
import SignIn from "../services/authentication/SignIn";
import SignUpHospital from "../services/authentication/SignUpHospital";
import SignUpNGO from "../services/authentication/SignUpNGO";
import Error from "./Error";
import SignUp from "../services/authentication/SignUp";
import PatientForm from "../services/authentication/signup hospital/PatientForm";
import NurseForm from "../services/authentication/signup hospital/NurseForm";
import DoctorForm from "../services/authentication/signup hospital/DoctorForm";
import AdminComponent from "../services/authentication/signup hospital/AdminComponent";
import SuperAdminComponent from "../services/authentication/signup hospital/SuperAdminComponent";
import LabForm from "../services/authentication/signup hospital/LabForm";
import ReportForm from "../services/authentication/signup hospital/ReportForm";

const routes = [
  {
    path: "/",
    component: LandingPage,
    exact: true,
  },
  {
    path: "/home",
    component: Home,
    exact: true,
  },
  {
    path: "/about",
    component: About,
    exact: true,
  },
  {
    path: "/services",
    component: Services,
    exact: true,
  },
  {
    path: "/contact-us",
    component: Contactus,
    exact: true,
  },
  {
    path: "/auth",
    component: SignupLogin,
    exact: true,
    routes: [
      {
        path: "/auth/sign_in",
        component: SignIn,
        exact: true,
      },
      {
        path: "/auth/sign_up",
        component: SignUp,
        exact: true,
      },
      {
        path: "/auth/sign_up/hospital",
        component: SignUpHospital,
        exact: true,
        routes: [
          {
            path: "/auth/sign_up/hospital/doctor",
            component: DoctorForm,
            exact: true,
          },
          {
            path: "/auth/sign_up/hospital/patient",
            component: PatientForm,
            exact: true,
          },
          {
            path: "/auth/sign_up/hospital/nurse",
            component: NurseForm,
            exact: true,
          },
          {
            path: "/auth/sign_up/hospital/admin",
            component: AdminComponent,
            exact: true,
          },
          {
            path: "/auth/sign_up/hospital/super_admin",
            component: SuperAdminComponent,
            exact: true,
          },
          {
            path: "/auth/sign_up/hospital/lab",
            component: LabForm,
            exact: true,
          },
          {
            path: "/auth/sign_up/hospital/report",
            component: ReportForm,
            exact: true,
          },
        ],
      },
      {
        path: "/auth/sign_up/ngo",
        component: SignUpNGO,
        exact: true,
      },
    ],
  },
  {
    path: "/dashboard",
    component: Dashboard,
    exact: true,
  },
];

function Routes() {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          render={(props) => (
            <route.component {...props} routes={route.routes} />
          )}
        />
      ))}

      {/* Catch-all route for unknown paths */}
      <Route path="*" render={() => <Error />} />
    </Switch>
  );
}

export default Routes;
