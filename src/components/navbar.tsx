import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Flex, Text } from '@mantine/core';

import IconKorzine from './images/icon-korzine';
import IconLogin from './images/icon-login';

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
	const navigate = useNavigate();

	return (
		<>
			<Box p="24px 100px" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: '100px' }}>
				<Box
					onClick={() => {
						navigate('/');
					}}
					sx={{
						cursor: 'pointer'
					}}>
					<img src="https://e-com-react.netlify.app/static/media/logo.221f6b13.svg" alt="comfy sloth" />
				</Box>

				<Box>
					<ul
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							gap: '30px',
							listStyle: 'none',
							textDecoration: 'none',
							cursor: 'pointer'
						}}>
						<li
							onClick={() => {
								navigate('/');
							}}
							style={{
								color: '#324d67',
								fontSize: '1rem',
								textTransform: 'capitalize',
								letterSpacing: '0.1rem',
								cursor: 'pointer'
							}}>
							Home
						</li>
						<li
							onClick={() => {
								navigate('/about');
							}}
							style={{
								color: '#324d67',
								fontSize: '1rem',
								textTransform: 'capitalize',
								letterSpacing: '0.1rem',
								cursor: 'pointer'
							}}>
							About
						</li>
						<li
							onClick={() => {
								navigate('/products');
							}}
							style={{
								color: '#324d67',
								fontSize: '1rem',
								textTransform: 'capitalize',
								letterSpacing: '0.1rem'
							}}>
							Products
						</li>
					</ul>
				</Box>
				<Flex className="images" gap="40px" justify="center" align="center">
					<Box sx={{ display: 'flex', gap: '5px', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
						<Box>
							<Text
								sx={{
									fontSize: '1.5rem',
									letterSpacing: '0.1rem',
									color: '#102a42',
									display: 'flex',
									alignItems: 'center'
								}}>
								Cart
							</Text>
						</Box>
						<Flex justify="center">
							<IconKorzine />
							<span
								style={{
									position: 'absolute',
									right: '143px',
									top: '23px',
									background: 'var(--clr-primary-5)',
									width: '16px',
									height: '16px',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									borderRadius: '50%',
									fontSize: '0.75rem',
									color: 'var(--clr-white)',
									padding: '12px'
								}}>
								1
							</span>
						</Flex>
					</Box>
					<Box sx={{ display: 'flex', gap: '5px', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
						<Box>
							<Text
								sx={{
									fontSize: '1.5rem',
									letterSpacing: '0.1rem',
									color: '#102a42',
									display: 'flex',
									alignItems: 'center'
								}}>
								Login
							</Text>
						</Box>
						<Flex justify="center">
							<IconLogin />
						</Flex>
					</Box>
				</Flex>
			</Box>
		</>
	);
};

export default Navbar;
