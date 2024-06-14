import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Flex, Text, Title } from '@mantine/core';

interface Section1Props {}

const Section1: FunctionComponent<Section1Props> = () => {
	const navigate = useNavigate();

	return (
		<Flex id="section-1" p="24px 100px" justify="center" align="center" w="100%" h="80vh">
			<Flex w="50%" justify="center" direction="column">
				<Title color="#102a42">Design Your Comfort Zone</Title>
				<Text
					sx={{
						lineHeight: '2',
						maxWidth: '530px',
						marginBottom: '2rem',
						color: 'var(--clr-grey-5)',
						fontSize: '1.25rem'
					}}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti iure quasi odit tenetur unde officiis repudiandae quod deserunt quia
					eum?
				</Text>
				<Button
					onClick={() => {
						navigate('/products');
					}}
					// @ts-expect-error
					sx={{
						width: '145px',
						background: 'var(--clr-primary-5)',
						color: 'var(--clr-primary-10)',
						letterSpacing: 'var(--spacing)',
						display: 'inline-block',
						fontWeight: '400',
						transition: 'var(--transition)',
						fontSize: '.875rem',
						cursor: 'pointer',
						boxShadow: '0 1px 3px rgba(0, 0, 0, .2)',
						borderRadius: 'var(--radius)',
						borderColor: 'transparent'
					}}>
					Shop Now
				</Button>
			</Flex>
			<Flex w="50%" h="100%" justify="center" direction="column">
				<img height="100%" width="100%" src="https://e-com-react.netlify.app/static/media/hero-bcg.a876f19f.jpeg" alt="" />
			</Flex>
		</Flex>
	);
};

export default Section1;
