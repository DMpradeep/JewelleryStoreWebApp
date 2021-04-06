import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { renderToString } from 'react-dom/server';
import {
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import jsPDF from 'jspdf';
import { toast } from "react-toastify";

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
  openPrintToScreenDialog: boolean;
  openPrintToFileDialog: boolean;
}

export class PriceEstimationPage extends React.Component<
  IPriceEstimationPageProps,
  IPriceEstimationPageState
> {
  constructor(props: IPriceEstimationPageProps) {
    super(props);

    this.state = {
      pricePerGram: 0,
      weight: 0,
      openPrintToScreenDialog: false,
      openPrintToFileDialog: false,
    };
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
            display: "block",
            boxSizing: "border-box",
            width: "200px",
            height: "40px",
            marginTop: "20px",
            marginLeft: "20px",
          }}
          onClick={this.onCalculateClicked}
        >
          {"Calculate"}
        </Button>

        <Button
          variant="contained"
          color="primary"
          style={{
            width: "200px",
            height: "40px",
            marginTop: "20px",
            marginLeft: "20px",
          }}
          onClick={() => this.setState({ openPrintToScreenDialog: true })}
        >
          {"Print to screen"}
        </Button>
        {this.renderPrintToScreenDialog()}

        <Button
          variant="contained"
          color="primary"
          style={{
            width: "200px",
            height: "40px",
            marginTop: "20px",
            marginLeft: "20px",
          }}
          onClick={this.printToFile}
        >
          {"Print to file"}
        </Button>

        <Button
          variant="contained"
          color="primary"
          style={{
            width: "200px",
            height: "40px",
            marginTop: "20px",
            marginLeft: "20px",
          }}
          onClick={() => {toast.error("Not implemented");}}
        >
          {"Print to paper"}
        </Button>
      </div>
    );
  }

  private renderPrintToScreenDialog = (): JSX.Element => {
    return (
      <Dialog
        onClose={() => this.setState({ openPrintToScreenDialog: false })}
        aria-labelledby="simple-dialog-title"
        open={this.state.openPrintToScreenDialog}
      >
        <DialogTitle id="simple-dialog-title">{"Print to screen"}</DialogTitle>
        {this.consolidatedEstimationRender()}
      </Dialog>
    );
  };

  private consolidatedEstimationRender = () : JSX.Element => (
    <div>
      <List>
        <ListItem>
          <ListItemText primary={"Gold price"} secondary={"(per gram)"} />
          <ListItemText primary={this.state.pricePerGram} />
        </ListItem>
        <ListItem>
          <ListItemText primary={"Weight"} secondary={"(grams)"} />
          <ListItemText primary={this.state.weight} />
        </ListItem>
        {this.props.userType == 1 && (
          <ListItem>
            <ListItemText primary={"Discount"} secondary={"(percentage)"} />
            <ListItemText primary={this.props.discountPercentage} />
          </ListItem>
        )}
        <ListItem>
          <ListItemText primary={"Total price"} />
          <ListItemText primary={this.props.totalPrice} />
        </ListItem>
      </List>
    </div>
  );

  private printToFile = () => {
    const string = renderToString(this.consolidatedEstimationRender());
    const pdf = new jsPDF();
    pdf.fromHTML(string, 0, 0);
    pdf.save('Estimation')
  }

  private onCalculateClicked = () => {
    this.props.calculateTotalPrice(this.state.pricePerGram, this.state.weight);
  };

  private setPricePerGram = (
    ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    this.setState({
      pricePerGram: +ev.target.value,
    });
  };

  private setWeight = (
    ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    this.setState({
      weight: +ev.target.value,
    });
  };
}
