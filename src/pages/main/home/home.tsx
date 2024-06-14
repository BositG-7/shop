import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mantine/core';

import { Section1, Section2, Section3 } from './components';

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
	const navigate = useNavigate();

	return (
		<Box sx={{ justifyContent: 'space-between', gap: '50px', alignItems: 'center', flexDirection: 'column', minHeight: '100vh', width: '100%' }}>
			<Section1 />
			<Section2 />
			<Section3 />
		</Box>
	);
};

export default Home;
