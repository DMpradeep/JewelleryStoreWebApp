import { put, take, takeEvery } from "redux-saga/effects";
import { PriceEstimationPageActions } from "./PriceEstimationPageActions";
import { PriceEstimationPageActionTypes } from "./PriceEstimationPageActionTypes";
import { handleApiError } from "../../../Core/HandleApiErrorEffect";
import { ThenArg } from "../../../Core/TypeHelpers";
import { UserApi } from "../../../Api/UserApi";
import { JewelleryPriceApi } from "../../../Api/JewelleryPriceApi";
import { CommonActions } from "../../../Common/State/CommonActions";
import { CommonActionTypes } from "../../../Common/State/CommonActionTypes";

const userApi = new UserApi();
const jewelleryPriceApi = new JewelleryPriceApi();

function* loadPriceEstimationPageEffect(
  action: ReturnType<typeof PriceEstimationPageActions.load>
) {

  yield put(CommonActions.fetchClientConfig()); //temporary change
  yield take(CommonActionTypes.FETCH_CLIENT_CONFIG_SUCCESS);

  const userMessage: ThenArg<typeof userApi.getUser> = yield userApi.getUser(
    action.userRno
  );

  yield put(PriceEstimationPageActions.loadSuccess(userMessage));
}


function* calculateTotalPriceEffect(
  action: ReturnType<typeof PriceEstimationPageActions.calculateTotalPrice>
) {

  const totalPrice: ThenArg<typeof jewelleryPriceApi.calculateTotalPrice> = yield jewelleryPriceApi.calculateTotalPrice(
    action.userRno,
    action.pricePerGram,
    action.weight
  );

  yield put(PriceEstimationPageActions.calculateTotalPriceSuccess(totalPrice));
}

export function* PriceEstimationPageEffects() 
{
  yield takeEvery(
    PriceEstimationPageActionTypes.Load_PriceEstimation_Page,
    handleApiError(loadPriceEstimationPageEffect)
  );

  yield takeEvery(
    PriceEstimationPageActionTypes.Calculate_TotalPrice,
    handleApiError(calculateTotalPriceEffect)
  );
}
