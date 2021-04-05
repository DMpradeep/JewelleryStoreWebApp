import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";

import { PagesReducer } from "../Pages/PagesReducer";
import { IRootState } from "./IRootState";

export const createReducers = (history: any) =>
    combineReducers<IRootState>({
        pages: PagesReducer,
        router: connectRouter(history),
    });
