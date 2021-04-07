import { TypeLoginPageActions } from "./LoginPageActions";
import { LoginPageActionTypes } from "./LoginPageActionTypes";
import { ILoginPageState } from "../Models/ILoginPageState";

const initialState: ILoginPageState = {
  accessToken: "",
  userRno: 0,
};

export function LoginPageReducer(
  state: ILoginPageState = initialState,
  action: TypeLoginPageActions
): ILoginPageState {
  switch (action.type) {
    case LoginPageActionTypes.SetUserAccessToken: {
      return {
        ...state,
        accessToken: action.tokenMessage.token,
        userRno: action.tokenMessage.userRno
      };
    }
  }
  return state;
}
