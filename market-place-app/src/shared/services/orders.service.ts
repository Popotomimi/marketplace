import { marketPlaceApiClient } from "../api/market-place";
import {
  SubmitOrderResponse,
  SubmitOrdersRequestParamsInterface,
} from "../interfaces/http/orders";

export const submitOrder = async (
  order: SubmitOrdersRequestParamsInterface,
) => {
  const { data } = await marketPlaceApiClient.post<SubmitOrderResponse>(
    "/orders",
    order,
  );

  return data;
};
