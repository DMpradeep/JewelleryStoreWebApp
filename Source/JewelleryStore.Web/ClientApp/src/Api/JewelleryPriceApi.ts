import { BaseApi, RequestMethod } from "./BaseApi";

export class JewelleryPriceApi extends BaseApi {
  public calculateTotalPrice = (
    pricePerGram: number,
    weight: number
  ): Promise<number> => {
    var requestObject = {
      price: pricePerGram,
      weight: weight,
    };

    var relativeUrl = "/api/JewelleryPrice/calculate";

    return this.callApi(relativeUrl, RequestMethod.POST, requestObject);
  };
}
