import { TypePriceEstimationPageActions } from "./PriceEstimationPageActions";
import { PriceEstimationPageActionTypes } from "./PriceEstimationPageActionTypes";
import { IPriceEstimationPageState } from "../Models/IPriceEstimationPageState";

const initialState: IPriceEstimationPageState = {
  totalPrice: 0,
  discountPercentage: 0,
  userType: 0,
};

export function PriceEstimationPageReducer(
  state: IPriceEstimationPageState = initialState,
  action: TypePriceEstimationPageActions
): IPriceEstimationPageState {
  switch (action.type) {
    case PriceEstimationPageActionTypes.Load_PriceEstimation_Page_Success: {
      return {
        ...state,
        discountPercentage: action.userMessage.discountPercentage,
        userType: action.userMessage.type,
      };
    }
    case PriceEstimationPageActionTypes.Calculate_TotalPrice_Success: {
      return {
        ...state,
        totalPrice: action.totalPrice,
      };
    }
    case PriceEstimationPageActionTypes.Reset_PriceEstimation_State: {
      return {
        ...initialState
      };
    }
  }
  return state;
}
