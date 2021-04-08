import { connect } from "react-redux";

import { selectIsLoading } from "../State/CommonSelectors";
import { IRootState } from "../../State/IRootState";
import { ILoadingSpinnerStateToProps, LoadingSpinner } from "./LoadingSpinner";

const mapStateToProps = (state: IRootState): ILoadingSpinnerStateToProps => {
    const propertyProps: ILoadingSpinnerStateToProps = {
        isVisible: selectIsLoading(state),
    };
    return propertyProps;
};

export const LoadingSpinnerContainer = connect(mapStateToProps, null)(LoadingSpinner);
