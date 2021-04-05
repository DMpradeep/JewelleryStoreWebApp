import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { LoginPageContainer } from "./Pages/LoginPage/Containers/LoginPage.container";
import { PriceEstimationPageContainer } from "./Pages/PriceEstimationPage/Containers/PriceEstimationPage.container";
import "./custom.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginPageContainer} />
        <Route path="/app/user/:userRno/estimate/price" component={PriceEstimationPageContainer} />
      </Switch>
    </BrowserRouter>
    <ToastContainer pauseOnFocusLoss={false} />
  </div>
);
