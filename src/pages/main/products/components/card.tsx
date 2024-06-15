import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Flex, Grid, Text } from '@mantine/core';

interface CardProps {
	id: number;
	title: string;
	price: number;
	img: string;
}

const Card: FunctionComponent<CardProps> = ({ id, title, price, img }) => {
	const navigate = useNavigate();

	return (
		<>
			<Grid.Col
				onClick={() => {
					navigate(`product/${id}`);
				}}
				h={430}
				m={40}
				key={id}
				span={12}
				sm={6}
				md={3}
				lg={3}>
				<Flex w="100%" mah="100%" justify="center" align="center" direction="column">
					<Flex sx={{ borderRadius: '4px', padding: '8px', border: '1px solid black' }}>
						<img
							style={{
								borderRadius: '30px'
							}}
							width="300px"
							height="300px"
							src={img}
							alt=""
						/>
					</Flex>
					<Flex w="100%" justify="space-between" align="center" mt={10}>
						<Text size="1rem" maw={150}>
							{title}
						</Text>
						<Text color="var(--clr-primary-5)" size="1rem">
							{price}
						</Text>
					</Flex>
				</Flex>
			</Grid.Col>
		</>
	);
};

export default Card;
