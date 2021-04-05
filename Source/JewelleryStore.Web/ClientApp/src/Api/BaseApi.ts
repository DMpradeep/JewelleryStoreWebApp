import { store } from "../State/Store";

export class BaseApi {
    protected callLocalServer<T>(relativeUrl: string): Promise<T> {
        const URL = `.${relativeUrl}`;

        return fetch(URL, { method: RequestMethod.GET })
            .then((response) =>response.json())
            .catch((err) => {
                throw err;
            });
    }

    protected callApi<T>(
        relativeUrl: string,
        requestMethod: RequestMethod,
        requestObject?: any
    ): Promise<T> {
        return this.callApiWithoutResponse(relativeUrl, requestMethod, requestObject)
            .then((response) => Promise.all([response, response.ok, response.text()]))
            .then(([response, responseOk, responseText]) => {
                const body = responseText ? JSON.parse(responseText) : {};
                if (responseOk) {
                    return body;
                } else {
                    body.response = response;
                    throw body;
                }
            });
    }

    private callApiWithoutResponse<T>(
        relativeUrl: string,
        requestMethod: RequestMethod,
        requestObject?:  any
    ): Promise<Response> {
        const completeURL: string = this.getCompleteURL(relativeUrl);

        return fetch(completeURL, {
            body: JSON.stringify(requestObject),
            headers: new Headers({
                "Cache-Control": "no-cache",
                "Content-Type": "application/json",
            }),
            method: requestMethod,
        });
    }

    private getCompleteURL(relativePath: string): string {
        const baseURL = store.getState().common.clientConfig.apiUrl;
        return `${baseURL}${relativePath}`;
    }
}

export enum RequestMethod 
{
    GET = "GET",
    POST = "POST",
};
