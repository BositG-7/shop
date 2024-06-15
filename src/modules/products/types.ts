/* eslint-disable @typescript-eslint/no-unused-expressions */
export namespace IProduct {
	export namespace Category {
		export interface Request {}
		export type TResponse = string[];
	}
	export namespace Products {
		export interface Request {}
		export interface Response {
			products: {
				id: number;
				title: string;
				price: number;
				description: string;
				brend: string;
				rating: number;
				thumbnail: string;
				images: string[];
			}[];
		}
	}
}
