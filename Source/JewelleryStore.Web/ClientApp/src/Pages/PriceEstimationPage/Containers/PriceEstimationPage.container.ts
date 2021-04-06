import { connect } from "react-redux";
import { Dispatch } from "redux";

import { IRootState } from "../../../State/IRootState";
import {
  IPriceEstimationPageDispatchToProps,
  IPriceEstimationPageStateToProps,
  PriceEstimationPage,
} from "../Components/PriceEstimationPage";
import { PriceEstimationPageActions } from "../State/PriceEstimationPageActions";
import {
  selectDiscountPercentage,
  selectTotalPrice,
  selectUserType,
} from "../State/PriceEstimationPageSelectors";

const mapStateToProps = (
  state: IRootState
): IPriceEstimationPageStateToProps => {
  const propertyProps: IPriceEstimationPageStateToProps = {
    userType: selectUserType(state),
    discountPercentage: selectDiscountPercentage(state),
    totalPrice: selectTotalPrice(state),
  };
  return propertyProps;
};

const mapDispatchToProps = (
  dispatch: Dispatch,
  ownProps: any
): IPriceEstimationPageDispatchToProps => {
  const methodProps: IPriceEstimationPageDispatchToProps = {
    loadPriceEstimationPage: () => {
      dispatch(PriceEstimationPageActions.load());
    },
    calculateTotalPrice: (pricePerGram: number, weight: number) => {
      dispatch(
        PriceEstimationPageActions.calculateTotalPrice(
          pricePerGram,
          weight
        )
      );
    },
    resetPriceEstimationState: () => {
      dispatch(PriceEstimationPageActions.resetState());
    },
  };
  return methodProps;
};

export const PriceEstimationPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PriceEstimationPage);
