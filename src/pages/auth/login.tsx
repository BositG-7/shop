import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mantine/core';

interface LoginProps {}

const Login: FunctionComponent<LoginProps> = () => {
	const navigate = useNavigate();

	return <Box>Login</Box>;
};

export default Login;
