import { http, RequestFn } from 'services';

import { IProduct } from './types';

export const ProductGet: RequestFn<IProduct.Products.Request, IProduct.Products.Response> = par => http.get(`/products/`);
export const CategortList: RequestFn<IProduct.Category.Request, IProduct.Category.TResponse> = par => http.get(`/products/category-list`);
