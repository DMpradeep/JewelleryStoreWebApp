import React from "react";

export interface ILoadingSpinnerStateToProps {
  isVisible: boolean;
}

export class LoadingSpinner extends React.Component<
  ILoadingSpinnerStateToProps,
  {}
> {
  public render(): JSX.Element | null {
    const { isVisible: isLoading } = this.props;

    if (!isLoading) return null;

    return (
      <div className="loading-spinner-wrap">
        <div className="spinner" />
      </div>
    );
  }
}
