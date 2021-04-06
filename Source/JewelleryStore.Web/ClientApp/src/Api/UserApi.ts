import { BaseApi, RequestMethod } from "./BaseApi";
import { UserMessage } from "../Models/UserMessage";
import { UserTokenMessage } from "../Models/UserTokenMessage";

export class UserApi extends BaseApi {
  public validateUser = (
    userName: string,
    password: string
  ): Promise<UserTokenMessage> => {
    var requestObject = {
      id: userName,
      password: password,
    };

    var relativeUrl = "/api/token";

    return this.callApi(relativeUrl, RequestMethod.POST, requestObject);
  };

  public getUser = (userRno: number): Promise<UserMessage> => {
    var relativeUrl = "/api/User/" + userRno;
    return this.callApi(relativeUrl, RequestMethod.GET);
  };
}
