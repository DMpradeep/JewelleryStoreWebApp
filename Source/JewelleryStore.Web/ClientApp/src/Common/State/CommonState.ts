import { IClientConfig } from "../Models/IClientConfig";

export interface ICommonState {
    clientConfig: IClientConfig;
    isLoaderVisible : boolean;
}
