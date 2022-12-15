import { useRoutes } from "react-router-dom";
import Login from "../pages/LoginPage/Login";
import Headers from "../components/HeaderComponent";
import QaPages from "../pages/QaPages";

const Router = () => {
  let routes = useRoutes([
    {
      path: "nurse",
      element: <Headers.NurseHeader />,
    },
    {
      path: "admin",
      element: <Headers.QaHeader />,
      children: [
        {
          path: "home",
          element: <QaPages.Home />,
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
    { path: "/", element: <Login /> },
  ]);

  return routes;
};

export default Router;
