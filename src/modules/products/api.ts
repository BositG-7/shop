import { http, RequestFn } from 'services';

import { IProduct } from './types';

export const ProductGet: RequestFn<IProduct.Pruducts.Request, IProduct.Pruducts.Response> = par => http.get(`/product-retrieve/`);
