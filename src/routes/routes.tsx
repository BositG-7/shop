import { Navigate, Route, Routes as Switch } from 'react-router-dom';
import { Auth, Main } from 'pages';
import { getSession } from 'services';

import UserRoute from './user-route';

interface RoutesProps {}

// eslint-disable-next-line no-empty-pattern
const Routes = ({}: RoutesProps) => {
	const user = getSession();

	console.log(user.first_name);
	console.log(user);

	return (
		<Switch>
			<Route path="" element={<Main.Home.Home />} />
			<Route path="products" element={<Main.Prodcuts.Products />} />
			<Route path="about" element={<Main.About.About />} />

			<Route path="auth" element={<UserRoute allowed={!user?.first_name} redirectURL="/" />}>
				<Route path="login" element={<Auth.Login />} />
				<Route path="register" element={<Auth.Register />} />

				<Route path="*" index element={<Navigate to="/auth/login" />} />
			</Route>
			<Route path="*" index element={<Main.Home.Home />} />
		</Switch>
	);
};

export default Routes;
