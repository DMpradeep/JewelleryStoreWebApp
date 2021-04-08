import { ActionUnion, generateCreateAction } from "../../Core/ActionHelpers";
import { IClientConfig } from "../Models/IClientConfig";
import { CommonActionTypes } from "./CommonActionTypes";

const createAction = generateCreateAction<CommonActionTypes>();

export const CommonActions = {
  fetchClientConfig: () =>
    createAction({
      type: CommonActionTypes.FETCH_CLIENT_CONFIG,
    }),

  fetchClientConfigSuccess: (clientConfig: IClientConfig) =>
    createAction({
      clientConfig,
      type: CommonActionTypes.FETCH_CLIENT_CONFIG_SUCCESS,
    }),

  showLoadingSpinner: () =>
    createAction({
      type: CommonActionTypes.SHOW_LOADING_SPINNER,
    }),

  hideLoadingSpinner: () =>
    createAction({
      type: CommonActionTypes.HIDE_LOADING_SPINNER,
    }),
};

export type TypeCommonActions = ActionUnion<typeof CommonActions>;
