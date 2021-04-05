import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { isEmpty } from "lodash";

export interface ILoginPageDispatchToProps {
  validateUserAndLogin: (userName: string, password: string) => void;
}

export interface ILoginPageState {
  userName: string;
  password: string;
  userNameHelperText: string;
  passwordHelperText: string;
}

export class LoginPage extends React.Component<
  ILoginPageDispatchToProps,
  ILoginPageState
> {
  constructor(props: ILoginPageDispatchToProps) {
    super(props);

    this.state = {
      userName: "",
      password: "",
      userNameHelperText: "",
      passwordHelperText: "",
    };
  }

  public render(): JSX.Element {
    return (
      <div>
        <TextField
          required
          id="standard-required"
          label="User Name"
          variant="outlined"
          style={{
            display: "block",
            boxSizing: "border-box",
            marginTop: "20px",
            marginLeft: "20px",
          }}
          helperText={this.state.userNameHelperText}
          onChange={this.setUserName}
        />

        <TextField
          required
          id="standard-required"
          label="Password"
          variant="outlined"
          type="password"
          style={{
            display: "block",
            boxSizing: "border-box",
            marginTop: "20px",
            marginLeft: "20px",
          }}
          helperText={this.state.passwordHelperText}
          onChange={this.setPassword}
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
          onClick={this.onLoginClicked}
          disabled={this.disableLoginButton()}
        >
          {"Login"}
        </Button>
      </div>
    );
  }

  private disableLoginButton = (): boolean => {
    return isEmpty(this.state.userName) || isEmpty(this.state.password);
  };

  private onLoginClicked = () => {
    this.props.validateUserAndLogin(this.state.userName, this.state.password);
  };

  private setUserName = (
    ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    this.setState({
      userName: ev.target.value,
      userNameHelperText: isEmpty(ev.target.value)
        ? "Please enter valid user name"
        : "",
    });
  };

  private setPassword = (
    ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    this.setState({
      password: ev.target.value,
      passwordHelperText: isEmpty(ev.target.value)
        ? "Please enter valid password"
        : "",
    });
  };
}
