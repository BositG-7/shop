import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Flex, InputBase, Text, Title } from '@mantine/core';

interface Section3Props {}

const Section3: FunctionComponent<Section3Props> = () => {
	const navigate = useNavigate();

	return (
		<Flex p="24px 100px" direction="column" justify="center" gap={20} w="100%" h="50vh">
			<Title size="2rem">Join our newsletter and get 20% off</Title>

			<Flex w="100%" justify="space-between" align="center">
				<Text maw={521} size="1rem" color="#617d98">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum veniam repudiandae vel ab id, fuga praesentium nobis natus ipsam vero?
				</Text>
				<form style={{ display: 'flex' }}>
					<InputBase
						sx={{
							borderRight: 'none',
							color: 'var(--clr-grey-3)',
							borderTopLeftRadius: 'var(--radius)',
							borderBottomLeftRadius: 'var(--radius)'
						}}
					/>
					<Button
						sx={{
							fontSize: '1rem',
							padding: '0.5rem 1rem',
							border: '2px solid var(--clr-black)'
						}}>
						Subscribe
					</Button>
				</form>
			</Flex>
		</Flex>
	);
};

export default Section3;
