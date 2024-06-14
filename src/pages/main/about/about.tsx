import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mantine/core';

interface AboutProps {}

const About: FunctionComponent<AboutProps> = () => {
	const navigate = useNavigate();

	return <Box>About</Box>;
};

export default About;
