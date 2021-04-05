import { delay, put, take, takeEvery } from "redux-saga/effects";
import { LoginPageActions } from "./LoginPageActions";
import { LoginPageActionTypes } from "./LoginPageActionTypes";
import { handleApiError } from "../../../Core/HandleApiErrorEffect";
import { ThenArg } from "../../../Core/TypeHelpers";
import { UserApi } from "../../../Api/UserApi";
import { toast } from "react-toastify";
import { push } from "connected-react-router";
import { CommonActions } from "../../../Common/State/CommonActions";
import { CommonActionTypes } from "../../../Common/State/CommonActionTypes";

const userApi = new UserApi();

function* validateUserAndLoginEffect(
  action: ReturnType<typeof LoginPageActions.validateUserAndLogin>
) {
  
  yield put(CommonActions.fetchClientConfig()); //temporary change
  yield take(CommonActionTypes.FETCH_CLIENT_CONFIG_SUCCESS);
  
  const userRno: ThenArg<
    typeof userApi.validateUser
  > = yield userApi.validateUser(action.userName, action.password);

  console.log(userRno);

  if (userRno) {
    toast.success("Login success");
  }
  
  yield put(push("/user/" + userRno + "/estimate/price"));
}

export function* LoginPageEffects() {
  yield takeEvery(
    LoginPageActionTypes.ValidateUserAndLogin,
    handleApiError(validateUserAndLoginEffect)
  );
}
