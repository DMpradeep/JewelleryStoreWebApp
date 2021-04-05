import "bootstrap/dist/css/bootstrap.css";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { sagaMiddleware, store } from "./State/Store";
import rootEffects from "./State/RootEffects";

sagaMiddleware.run(rootEffects);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("jewellerystore-app") as HTMLElement
);
