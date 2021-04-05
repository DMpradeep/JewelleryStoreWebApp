import { createSelector } from "reselect";
import { IRootState } from "../../../State/IRootState";

const priceEstimationPageSelector = (state: IRootState) => state.pages.priceEstimationPage;

export const selectUserType = createSelector(priceEstimationPageSelector, (selector) => selector.userType);

export const selectDiscountPercentage = createSelector(priceEstimationPageSelector, (selector) => selector.discountPercentage);

export const selectTotalPrice = createSelector(priceEstimationPageSelector, (selector) => selector.totalPrice);

