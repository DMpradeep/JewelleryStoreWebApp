import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export interface IPriceEstimationPageStateToProps {
  userType: number;
  discountPercentage: number;
  totalPrice: number;
}

export interface IPriceEstimationPageDispatchToProps {
  loadPriceEstimationPage: () => void;
  calculateTotalPrice: (pricePerGram: number, weight: number) => void;
  resetPriceEstimationState: () => void;
}

export interface IPriceEstimationPageProps
  extends IPriceEstimationPageStateToProps,
    IPriceEstimationPageDispatchToProps {}
    
export interface IPriceEstimationPageState {
    pricePerGram: number;
    weight: number;
}

export class PriceEstimationPage extends React.Component<
  IPriceEstimationPageProps,
  IPriceEstimationPageState
> {
  constructor(props: IPriceEstimationPageProps) {
    super(props);

    this.state = {
        pricePerGram: 0,
        weight: 0
    }
  }

  public componentWillMount() {
    this.props.loadPriceEstimationPage();
  }

  public componentWillUnmount() {
    this.props.resetPriceEstimationState();
  }

  public render(): JSX.Element {
    return (
      <div>
        <h5>
          Welcome:{" "}
          {this.props.userType === 0 ? "Normal User" : "Privileged User"}
        </h5>

        <TextField
          label="Gold Price (per gram)"
          variant="outlined"
          type="number"
          style={{
            display: "block",
            boxSizing: "border-box",
            marginTop: "20px",
            marginLeft: "20px",
          }}
          onChange={this.setPricePerGram}
        />
        <TextField
          label="Weight (grams)"
          variant="outlined"
          type="number"
          style={{
            display: "block",
            boxSizing: "border-box",
            marginTop: "20px",
            marginLeft: "20px",
          }}
          onChange={this.setWeight}
        />

        {this.props.userType == 1 && (
          <TextField
            disabled
            id="standard-disabled"
            label="Discount %"
            variant="outlined"
            value={this.props.discountPercentage}
            style={{
              display: "block",
              boxSizing: "border-box",
              marginTop: "20px",
              marginLeft: "20px",
            }}
          />
        )}

        <TextField
          disabled
          id="standard-disabled"
          label="Total price"
          variant="outlined"
          type="number"
          value={this.props.totalPrice}
          style={{
            display: "block",
            boxSizing: "border-box",
            marginTop: "20px",
            marginLeft: "20px",
          }}
        />

        <Button
          variant="contained"
          color="primary"
          style={{
            width: "200px",
            height: "40px",
            marginTop: "20px",
            marginLeft: "20px",
          }}
          onClick={this.onCalculateClicked}
        >
          {"Calculate"}
        </Button>
      </div>
    );
  }

  private onCalculateClicked = () => {
    this.props.calculateTotalPrice(this.state.pricePerGram, this.state.weight);
  };

  private setPricePerGram = (
    ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    this.setState({
      pricePerGram:  +ev.target.value,
    });
  };

  private setWeight = (
    ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    this.setState({
        weight:  +ev.target.value,
    });
  };
}
