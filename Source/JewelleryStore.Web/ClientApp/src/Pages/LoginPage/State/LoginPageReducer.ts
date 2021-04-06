import { TypeLoginPageActions } from "./LoginPageActions";
import { LoginPageActionTypes } from "./LoginPageActionTypes";
import { ILoginState } from "../Models/ILoginState";

const initialState: ILoginState = {
  accessToken: "",
  userRno: 0,
};

export function LoginPageReducer(
  state: ILoginState = initialState,
  action: TypeLoginPageActions
): ILoginState {
  switch (action.type) {
    case LoginPageActionTypes.SetUserAccessToken: {
      return {
        ...state,
        accessToken: action.tokenMessage.accessToken,
        userRno: action.tokenMessage.userRno
      };
    }
  }
  return state;
}
