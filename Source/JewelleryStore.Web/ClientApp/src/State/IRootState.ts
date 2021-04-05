import { RouterState } from "connected-react-router";
import { IPagesState } from "../Pages/PagesState";

export interface IRootState {
    pages: IPagesState;
    router: RouterState;
}