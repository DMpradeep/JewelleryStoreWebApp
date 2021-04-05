import { ActionUnion, generateCreateAction } from "../../../Core/ActionHelpers";
import { PriceEstimationPageActionTypes } from "./PriceEstimationPageActionTypes";
import { UserMessage } from "../../../Models/UserMessage";

const createAction = generateCreateAction<PriceEstimationPageActionTypes>();

export const PriceEstimationPageActions = {
  load: (userRno: number) =>
    createAction({
      type: PriceEstimationPageActionTypes.Load_PriceEstimation_Page,
      userRno,
    }),
  loadSuccess: (userMessage: UserMessage) =>
    createAction({
      type: PriceEstimationPageActionTypes.Load_PriceEstimation_Page_Success,
      userMessage,
    }),
  calculateTotalPrice: (
    userRno: number,
    pricePerGram: number,
    weight: number
  ) =>
    createAction({
      type: PriceEstimationPageActionTypes.Calculate_TotalPrice,
      userRno,
      pricePerGram,
      weight,
    }),
  calculateTotalPriceSuccess: (totalPrice: number) =>
    createAction({
      type: PriceEstimationPageActionTypes.Calculate_TotalPrice_Success,
      totalPrice,
    }),
  resetState: () =>
    createAction({
      type: PriceEstimationPageActionTypes.Reset_PriceEstimation_State,
    }),
};

export type TypePriceEstimationPageActions = ActionUnion<
  typeof PriceEstimationPageActions
>;
