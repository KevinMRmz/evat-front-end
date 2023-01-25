import Router from "./routes/routes";
import { LoaderContext } from "./contexts/loaderContext";
import ErrorMessageProvider from "./contexts/errorMessageContext";
import UserProvider from "./contexts/userContext";
import Components from "./components";
import { useContext } from "react";
import { NotificationContainer } from "react-notifications";
import "react-responsive-modal/styles.css";
import "react-notifications/lib/notifications.css";

function App() {
  const { display } = useContext(LoaderContext);

  return (
    <UserProvider>
      <ErrorMessageProvider>
        <Router />
        <Components.LoadingScreen show={display} />
      </ErrorMessageProvider>
      <NotificationContainer />
    </UserProvider>
  );
}

export default App;
