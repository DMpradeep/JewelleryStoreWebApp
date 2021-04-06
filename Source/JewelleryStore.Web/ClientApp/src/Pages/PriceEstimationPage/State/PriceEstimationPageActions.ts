import { ActionUnion, generateCreateAction } from "../../../Core/ActionHelpers";
import { PriceEstimationPageActionTypes } from "./PriceEstimationPageActionTypes";
import { UserMessage } from "../../../Models/UserMessage";

const createAction = generateCreateAction<PriceEstimationPageActionTypes>();

export const PriceEstimationPageActions = {
  load: () =>
    createAction({
      type: PriceEstimationPageActionTypes.Load_PriceEstimation_Page,
    }),
  loadSuccess: (userMessage: UserMessage) =>
    createAction({
      type: PriceEstimationPageActionTypes.Load_PriceEstimation_Page_Success,
      userMessage,
    }),
  calculateTotalPrice: (
    pricePerGram: number,
    weight: number
  ) =>
    createAction({
      type: PriceEstimationPageActionTypes.Calculate_TotalPrice,
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
