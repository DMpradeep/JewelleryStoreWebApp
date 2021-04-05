import { ActionUnion, generateCreateAction } from "../../../Core/ActionHelpers";
import { LoginPageActionTypes } from "./LoginPageActionTypes";

const createAction = generateCreateAction<LoginPageActionTypes>();

export const LoginPageActions = {
  validateUserAndLogin: (userName: string, password: string) =>
    createAction({
      type: LoginPageActionTypes.ValidateUserAndLogin,
      userName,
      password
    }),
};

export type TypeLoginPageActions = ActionUnion<typeof LoginPageActions>;
