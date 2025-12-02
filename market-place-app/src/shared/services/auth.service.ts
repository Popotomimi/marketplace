import {
  RegisterHttpParams,
  RegisterHttpResponse,
} from "../interfaces/http/register";
import { marketPlaceApiClient } from "../api/market-place";

export const register = async (userData: RegisterHttpParams) => {
  const { data } = await marketPlaceApiClient.post<RegisterHttpResponse>(
    "/auth/register",
    userData
  );

  return data;
};
