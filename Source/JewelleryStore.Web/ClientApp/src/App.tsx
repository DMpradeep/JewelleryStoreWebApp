import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { LoginPageContainer } from "./Pages/LoginPage/Containers/LoginPage.container";
import { PriceEstimationPageContainer } from "./Pages/PriceEstimationPage/Containers/PriceEstimationPage.container";
import "./custom.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { history } from "./State/Store";
import { ConnectedRouter } from "connected-react-router";
import { LoadingSpinnerContainer } from "./Common/Components/LoadingSpinner.container";

export const App = () => (
  <div>
    <ConnectedRouter history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={LoginPageContainer} />
          <Route
            path="/user/estimate/price"
            component={PriceEstimationPageContainer}
          />
        </Switch>
        <LoadingSpinnerContainer isVisible={false} />
        <ToastContainer pauseOnFocusLoss={false} />
      </div>
    </ConnectedRouter>
  </div>
);
