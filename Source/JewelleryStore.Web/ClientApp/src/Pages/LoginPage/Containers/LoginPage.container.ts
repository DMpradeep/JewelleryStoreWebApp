import { connect } from "react-redux";
import { Dispatch } from "redux";

import {
  ILoginPageDispatchToProps,
  LoginPage,
} from "../Components/LoginPage";
import { LoginPageActions } from "../State/LoginPageActions";

const mapDispatchToProps = (dispatch: Dispatch): ILoginPageDispatchToProps => {
  const methodProps: ILoginPageDispatchToProps = {
    validateUserAndLogin: (userName: string, password: string) => {
      dispatch(LoginPageActions.validateUserAndLogin(userName, password));
    }
  };
  return methodProps;
};

export const LoginPageContainer = connect(null, mapDispatchToProps)(LoginPage);
