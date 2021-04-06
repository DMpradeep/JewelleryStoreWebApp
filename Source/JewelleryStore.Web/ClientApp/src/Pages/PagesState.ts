import { ILoginState } from "./LoginPage/Models/ILoginState";
import { IPriceEstimationPageState } from "./PriceEstimationPage/Models/IPriceEstimationPageState";

export interface IPagesState {
  loginState: ILoginState;
  priceEstimationPage: IPriceEstimationPageState;
}
