import { createBrowserHistory } from "history";
import { confirmAlert } from "react-confirm-alert";
import { applyMiddleware, compose, createStore } from "redux";
import { createReducers } from "./RootReducer";
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";

export const sagaMiddleware = createSagaMiddleware();

export const history = createBrowserHistory({
  basename: "/",
  getUserConfirmation: (message, callback) => {
    confirmAlert({
      title: "Jewellery Store",
      message: message,
      buttons: [
        {
          label: "Yes",
          onClick: () => callback(true),
        },
        {
          label: "No",
          onClick: () => callback(false),
        },
      ],
    });
  },
});

export const store = createStore(
    createReducers(history),
    compose(
        applyMiddleware(routerMiddleware(history), sagaMiddleware),
    )
);
