import { RouterState } from "connected-react-router";
import { IPagesState } from "../Pages/PagesState";
import { ICommonState } from "../Common/State/CommonState";

export interface IRootState {
  pages: IPagesState;
  common: ICommonState;
  router: RouterState;
}
