import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { getSession } from 'services/store';

import { Types } from '.';

interface State {
	isLoading: boolean;
	user: Types.IEntity.User | null;
}

const useProfile = (): [State, Dispatch<SetStateAction<State>>] => {
	const user = getSession();
	const [state, setState] = React.useState<State>({ isLoading: false, user });

	useEffect(() => {
		// const request = async () => {
		// 	try {
		// 		const { data } = await Api.Profile();
		// 		setState({ user:data, isLoading: false });
		// 	} catch (err: any) {
		// 		setState({ user: null, isLoading: false });
		// 	}
		// };
		// if (access) request();
	}, []);

	return [state, setState];
};

export default useProfile;
