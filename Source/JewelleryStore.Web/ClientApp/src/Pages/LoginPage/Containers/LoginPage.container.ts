import { connect } from "react-redux";
import { Dispatch } from "redux";

import { IRootState } from "../../../State/IRootState";
import {
    ILoginPageDispatchToProps,
    ILoginPageStateToProps,
    LoginPage,
} from "../Components/LoginPage";
import { LoginPageActions } from "../State/LoginPageActions";

const mapStateToProps = (state: IRootState): ILoginPageStateToProps => {
    const propertyProps: ILoginPageStateToProps = {
    };
    return propertyProps;
};

const mapDispatchToProps = (dispatch: Dispatch): ILoginPageDispatchToProps => {
    const methodProps: ILoginPageDispatchToProps = {
        validateUserAndLogin: (userName: string, password: string) => {
            dispatch(LoginPageActions.validateUserAndLogin(userName, password));
        },
    };
    return methodProps;
};

export const LoginPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPage);
