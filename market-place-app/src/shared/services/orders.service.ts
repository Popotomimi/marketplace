import { marketPlaceApiClient } from "../api/market-place";
import { GetOrdersResponse } from "../interfaces/http/get-orders";
import {
  SubmitOrderResponse,
  SubmitOrdersRequestParamsInterface,
} from "../interfaces/http/submit-orders";

export const submitOrder = async (
  order: SubmitOrdersRequestParamsInterface,
) => {
  const { data } = await marketPlaceApiClient.post<SubmitOrderResponse>(
    "/orders",
    order,
  );

  return data;
};

export const getOrders = async () => {
  const { data } = await marketPlaceApiClient.get<GetOrdersResponse>("/orders");
  return data;
};
