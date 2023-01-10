import Router from "./routes/routes";
import { LoaderContext } from "./contexts/loaderContext";
import ErrorMessageProvider from "./contexts/errorMessageContext";
import Components from "./components";
import { useContext } from "react";
import "react-responsive-modal/styles.css";

function App() {
  const { display } = useContext(LoaderContext);

  return (
    <ErrorMessageProvider>
      <Router />
      <Components.LoadingScreen show={display} />
    </ErrorMessageProvider>
  );
}

export default App;
