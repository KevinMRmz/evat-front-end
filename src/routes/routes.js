import { useRoutes } from "react-router-dom";
import Login from "../pages/LoginPage/Login";
import SinglePatient from "../pages/SingleUserPage/PatientPage";
import StaffPage from "../pages/SingleUserPage/StaffPage";
import Headers from "../components/HeaderComponent";
import QaPages from "../pages/QaPages";
import NursePages from "../pages/NursePages";
import PatientProvider from "../contexts/patientContext";
import StaffProvider from "../contexts/staffContext";
import DoctorPages from "../pages/DoctorPages";
import EvatForm from "../pages/EvatForms/EvatForms";
import EvatPage from "../pages/EvatPage/EvatPage";
import NotificationPage from "../pages/NotificationPage/NotificationPage";
import ErrorPages from "../pages/ErrorPages";
import Roles from "../constants/roles";
import Auth from "../auth/Auth";
import UserPage from "../pages/UserPage/UserPage";

const Router = () => {
  let routes = useRoutes([
    {
      path: "nurse",
      element: (
        <Auth authorized={Roles.NURSE}>
          <Headers.NurseHeader />
        </Auth>
      ),
      children: [
        {
          index: "/",
          element: <NursePages.Home />,
        },
        {
          path: "notifications",
          element: <NursePages.Notifications />,
        },
        {
          path: "patient/:id",
          element: (
            <PatientProvider>
              <SinglePatient />
            </PatientProvider>
          ),
        },
        {
          path: "staff/:id",
          element: (
            <StaffProvider>
              <StaffPage />
            </StaffProvider>
          ),
        },
        {
          path: "evat-record/:id",
          element: <EvatForm />,
        },
        {
          path: "notification/:id",
          element: <NotificationPage />,
        },
        {
          path: "evat-form/:id",
          element: (
            <PatientProvider>
              <EvatPage />
            </PatientProvider>
          ),
        },
        {
          path: "config",
          element: <UserPage />,
        },
      ],
    },
    {
      path: "admin",
      element: (
        <Auth authorized={Roles.ADMIN}>
          <Headers.QaHeader />
        </Auth>
      ),
      children: [
        {
          index: "/",
          element: <QaPages.SearchStaff />,
        },
        {
          path: "patient-search",
          element: <QaPages.SearchPatient />,
        },
        {
          path: "config",
          element: <UserPage />,
        },
        {
          path: "create-patient",
          element: <QaPages.AddPatient />,
        },
        {
          path: "create-staff",
          element: <QaPages.AddStaff />,
        },
        {
          path: "patient/:id",
          element: (
            <PatientProvider>
              <SinglePatient />
            </PatientProvider>
          ),
        },
        {
          path: "assign-nurse/:id",
          element: <QaPages.AssignNurse />,
        },
        {
          path: "staff/:id",
          element: (
            <StaffProvider>
              <StaffPage />
            </StaffProvider>
          ),
        },
        {
          path: "notification/:id",
          element: <NotificationPage />,
        },
        {
          path: "evat-record/:id",
          element: <EvatForm />,
        },
      ],
    },
    {
      path: "doctor",
      element: (
        <Auth authorized={Roles.DOCTOR}>
          <Headers.DoctorHeader />
        </Auth>
      ),
      children: [
        {
          index: "/",
          element: <DoctorPages.CurrentNotifications />,
        },
        {
          path: "record-notifications",
          element: <DoctorPages.NotificationsRecord />,
        },
        {
          path: "patient/:id",
          element: (
            <PatientProvider>
              <SinglePatient />
            </PatientProvider>
          ),
        },
        {
          path: "staff/:id",
          element: (
            <StaffProvider>
              <StaffPage />
            </StaffProvider>
          ),
        },
        {
          path: "evat-record/:id",
          element: <EvatForm />,
        },
        {
          path: "config",
          element: <UserPage />,
        },
      ],
    },
    { path: "/forbidden", element: <ErrorPages.ForbiddenPage /> },
    { path: "/not-connection", element: <ErrorPages.NotConnectionPage /> },
    { path: "/", element: <Login /> },
    { path: "*", element: <ErrorPages.NotFoundPage /> },
  ]);

  return routes;
};

export default Router;
