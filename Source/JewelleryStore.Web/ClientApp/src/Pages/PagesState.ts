import { ILoginPageState } from "./LoginPage/Models/ILoginPageState";
import { IPriceEstimationPageState } from "./PriceEstimationPage/Models/IPriceEstimationPageState";

export interface IPagesState {
  loginPageState: ILoginPageState;
  priceEstimationPage: IPriceEstimationPageState;
}
