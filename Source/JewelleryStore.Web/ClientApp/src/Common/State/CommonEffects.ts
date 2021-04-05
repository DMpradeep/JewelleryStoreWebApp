import { put, takeEvery } from "redux-saga/effects";

import { ClientConfigApi } from "../../Api/ClientConfigApi";
import { ThenArg } from "../../Core/TypeHelpers";
import { CommonActions } from "./CommonActions";
import { CommonActionTypes } from "./CommonActionTypes";

const clientConfigApi = new ClientConfigApi();

function* fetchClientConfigEffect() {
    const result: ThenArg<typeof clientConfigApi.getClientConfig> = yield clientConfigApi.getClientConfig();
    yield put(CommonActions.fetchClientConfigSuccess(result));
}

export function* CommonEffects() {
    yield takeEvery(CommonActionTypes.FETCH_CLIENT_CONFIG, fetchClientConfigEffect);
}
