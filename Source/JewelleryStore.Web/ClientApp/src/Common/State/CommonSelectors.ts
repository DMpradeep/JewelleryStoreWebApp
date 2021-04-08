import { createSelector } from "reselect";
import { IRootState } from "../../State/IRootState";

const commonSelector = (state: IRootState) => state.common;

export const selectIsLoading = createSelector(commonSelector, (selector) => selector.isLoaderVisible);
