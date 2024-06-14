import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mantine/core';

interface RegisterProps {}

const Register: FunctionComponent<RegisterProps> = () => {
	const navigate = useNavigate();

	return <Box>Register</Box>;
};

export default Register;
