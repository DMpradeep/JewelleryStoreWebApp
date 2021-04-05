import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";

import { PagesReducer } from "../Pages/PagesReducer";
import { CommonReducer } from "../Common/State/CommonReducer";
import { IRootState } from "./IRootState";

export const createReducers = (history: any) =>
    combineReducers<IRootState>({
        pages: PagesReducer,
        common: CommonReducer,
        router: connectRouter(history),
    });
