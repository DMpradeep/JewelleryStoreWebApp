import { combineReducers } from "redux";
import { PriceEstimationPageReducer } from "./PriceEstimationPage/State/PriceEstimationPageReducer";

import { IPagesState } from "./PagesState";
import { LoginPageReducer } from "./LoginPage/State/LoginPageReducer";

export const PagesReducer = combineReducers<IPagesState>({
    priceEstimationPage: PriceEstimationPageReducer,
    loginState: LoginPageReducer
});
