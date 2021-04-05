import { all } from "redux-saga/effects";
import { LoginPageEffects } from "./LoginPage/State/LoginPageEffects";
import { PriceEstimationPageEffects } from "./PriceEstimationPage/State/PriceEstimationPageEffects";

export function* PagesEffects() {
  yield all([LoginPageEffects(), PriceEstimationPageEffects()]);
}
