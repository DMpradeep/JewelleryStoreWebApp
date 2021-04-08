import { IClientConfig } from "../Models/IClientConfig";
import { TypeCommonActions } from "./CommonActions";
import { CommonActionTypes } from "./CommonActionTypes";
import { ICommonState } from "./CommonState";

const initialState: ICommonState = {
  clientConfig: {
    apiUrl: "/",
  },
  isLoaderVisible: false,
};

export function CommonReducer(
  state: ICommonState = initialState,
  action: TypeCommonActions
): ICommonState {
  switch (action.type) {
    case CommonActionTypes.FETCH_CLIENT_CONFIG_SUCCESS: {
      return {
        ...state,
        clientConfig: action.clientConfig,
      };
    }
    case CommonActionTypes.SHOW_LOADING_SPINNER: {
      return {
        ...state,
        isLoaderVisible: true,
      };
    }
    case CommonActionTypes.HIDE_LOADING_SPINNER: {
      return {
        ...state,
        isLoaderVisible: false,
      };
    }
  }
  return state;
}
