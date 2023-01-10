import { useRoutes } from "react-router-dom";
import Login from "../pages/LoginPage/Login";
import SinglePatient from "../pages/SingleUserPage/PatientPage";
import StaffPage from "../pages/SingleUserPage/StaffPage";
import Headers from "../components/HeaderComponent";
import QaPages from "../pages/QaPages";
import NursePages from "../pages/NursePages";
import PatientProvider from "../contexts/patientContext";
import StaffProvider from "../contexts/staffContext";
import EvatPage from "../pages/EvatPage/EvatPage";

const Router = () => {
  let routes = useRoutes([
    {
      path: "nurse",
      element: <Headers.NurseHeader />,
      children: [
        {
          path: "main",
          element: <NursePages.Home />,
        },
        {
          path: "notifications",
          element: <NursePages.Notifications />,
        },
      ],
    },
    {
      path: "admin",
      element: <Headers.QaHeader />,
      children: [
        {
          path: "staff-search",
          element: <QaPages.SearchStaff />,
        },
        {
          path: "patient-search",
          element: <QaPages.SearchPatient />,
        },
        {
          path: "history",
          element: <QaPages.History />,
        },
        {
          path: "create-patient",
          element: <QaPages.AddPatient />,
        },
        {
          path: "create-staff",
          element: <QaPages.AddStaff />,
        },
      ],
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
      path: "evat-form/:id",
      element: <EvatPage />,
    },
    {
      path: "staff/:id",
      element: (
        <StaffProvider>
          <StaffPage />
        </StaffProvider>
      ),
    },
    { path: "/", element: <Login /> },
  ]);

  return routes;
};

export default Router;
