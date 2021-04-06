import { ActionUnion, generateCreateAction } from "../../../Core/ActionHelpers";
import { UserTokenMessage } from "../../../Models/UserTokenMessage";
import { LoginPageActionTypes } from "./LoginPageActionTypes";

const createAction = generateCreateAction<LoginPageActionTypes>();

export const LoginPageActions = {
  validateUserAndLogin: (userName: string, password: string) =>
    createAction({
      type: LoginPageActionTypes.ValidateUserAndLogin,
      userName,
      password,
    }),
  setUserAccessToken: (tokenMessage: UserTokenMessage) =>
    createAction({
      type: LoginPageActionTypes.SetUserAccessToken,
      tokenMessage
    }),
};

export type TypeLoginPageActions = ActionUnion<typeof LoginPageActions>;
