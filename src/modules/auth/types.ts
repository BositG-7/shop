export namespace IEntity {
	export interface User {
		first_name: string;
		phone: string;
	}
}
export namespace IContext {
	export interface Auth {
		user: IEntity.User | null;
		isLoading: boolean;
		methods: {
			login: (user: IEntity.User) => void;
			logout: () => void;
		};
	}
}
