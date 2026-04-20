import { marketPlaceApiClient } from "../api/market-place";
import {
  CreateCommentRequest,
  CreateCommentResponse,
} from "../interfaces/http/create-comment";

import { paginatedRespose } from "../interfaces/http/paginated-response";
import { ProductRequest } from "../interfaces/http/product";
import { GetProductCommentsInterface } from "../interfaces/http/product-comments";
import { GetProductDetailInterface } from "../interfaces/http/product-detail";
import {
  UpdateCommentRequest,
  UpdateCommentResponse,
} from "../interfaces/http/update-comment";
import { ProductCategory, ProductInterface } from "../interfaces/product";
import { ProductComment } from "../interfaces/product-comment";

export const getProducts = async (params: ProductRequest) => {
  const { data } = await marketPlaceApiClient.post<
    paginatedRespose<ProductInterface>
  >("/products", params);

  return data;
};

export const getProductCategories = async () => {
  const { data } = await marketPlaceApiClient.get<ProductCategory[]>(
    "/products/categories",
  );

  return data;
};

export const getProductDetail = async (id: number) => {
  const { data } = await marketPlaceApiClient.get<GetProductDetailInterface>(
    `/products/${id}`,
  );

  return data;
};

export const getProductComments = async (
  params: GetProductCommentsInterface,
) => {
  const { data } = await marketPlaceApiClient.post<
    paginatedRespose<ProductComment>
  >("products/comments", params);

  return data;
};

export const createComment = async (params: CreateCommentRequest) => {
  const { data } = await marketPlaceApiClient.post<CreateCommentResponse>(
    "/products/create/comments",
    params,
  );

  return data;
};

export const getUserComment = async (productId: number) => {
  const { data } = await marketPlaceApiClient.get<{
    content: string;
    rating: number;
  }>(`/products/${productId}/user-comment`);

  return data;
};

export const updateComment = async (params: UpdateCommentRequest) => {
  const { data } = await marketPlaceApiClient.put<UpdateCommentResponse>(
    `/products/comments/${params.commentId}`,
    {
      content: params.content,
      rating: params.rating,
    },
  );

  return data;
};
