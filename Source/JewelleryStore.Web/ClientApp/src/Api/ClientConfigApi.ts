import { IClientConfig } from "../Common/Models/IClientConfig";
import { BaseApi } from "./BaseApi";

export class ClientConfigApi extends BaseApi {
    public getClientConfig(): Promise<IClientConfig> {
        const relativeUrl = "/api/ClientConfig";
        return this.callLocalServer(relativeUrl);
    }
}
