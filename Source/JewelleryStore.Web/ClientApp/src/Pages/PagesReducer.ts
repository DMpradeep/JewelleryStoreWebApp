import { combineReducers } from "redux";
import { PriceEstimationPageReducer } from "./PriceEstimationPage/State/PriceEstimationPageReducer";

import { IPagesState } from "./PagesState";

export const PagesReducer = combineReducers<IPagesState>({
    priceEstimationPage: PriceEstimationPageReducer
});
