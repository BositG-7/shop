import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Routes } from 'routes';

import { Footer, Navbar } from 'components';

import 'bootstrap/dist/css/bootstrap.min.css';

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
	const navigete = useNavigate();

	return (
		<>
			<Navbar />
			<Routes />
			<Footer />
		</>
	);
};

export default App;
