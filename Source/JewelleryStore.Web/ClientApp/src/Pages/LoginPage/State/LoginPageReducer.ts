
import { TypeLoginPageActions } from "./LoginPageActions";
import { ILoginState } from "../Models/ILoginState";

const initialLoginPageState: ILoginState= {};

export function LoginPageReducer(
    state: ILoginState = initialLoginPageState,
    action: TypeLoginPageActions
): ILoginState {
    return state;
}
