import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Flex, Text, Title } from '@mantine/core';

import { IconBrilliant, IconCorpos, IconHistory } from './images';

interface Section2Props {}

const Section2: FunctionComponent<Section2Props> = () => {
	const navigate = useNavigate();

	return (
		<Flex direction="column" justify="center" align="center" gap={20} w="100%" h="80vh">
			<Title size="2.5rem">There Was An Error...</Title>
			<Flex direction="column" w="100%" mah="472px" bg="#eaded7">
				<Flex p="24px 100px" justify="space-between" align="center" w="100%">
					<Title color="#453227" maw={300} size="2rem">
						Custom Furniture Built Only For You
					</Title>
					<Text color="#795744" size="1rem" maw={580}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quisquam saepe id reiciendis sunt, repudiandae libero amet rem quia
						quod?
					</Text>
				</Flex>
				<Flex p="24px 100px" sx={{ position: 'relative', top: '10px' }} justify="space-between" align="center" w="100%">
					<Flex
						sx={{
							padding: '1rem 2rem',
							borderRadius: 'var(--radius)'
						}}
						justify="center"
						align="center"
						h="364px"
						w="364px"
						bg="#c5a491">
						<Flex direction="column" w="100%" h="100%" justify="center" align="center" gap={5}>
							<Flex
								sx={{
									width: '4rem',
									height: '4rem',
									display: 'grid',
									margin: '0px auto 1rem',
									placeItems: 'center',
									borderRadius: '50%',
									background: 'var(--clr-primary-10)',
									color: 'var(--clr-primary-1)'
								}}>
								<IconCorpos />
							</Flex>
							<Title
								size="1.5rem"
								sx={{
									color: 'var(--clr-primary-1)'
								}}>
								Mission
							</Title>
							<Text
								size="1rem"
								sx={{
									color: 'var(--clr-primary-2)'
								}}>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit
								autem unde numquam nisi.
							</Text>
						</Flex>
					</Flex>
					<Flex
						sx={{
							padding: '1rem 2rem',
							borderRadius: 'var(--radius)'
						}}
						justify="center"
						align="center"
						h="364px"
						w="364px"
						bg="#c5a491">
						<Flex direction="column" w="100%" h="100%" justify="center" align="center" gap={5}>
							<Flex
								sx={{
									width: '4rem',
									height: '4rem',
									display: 'grid',
									margin: '0px auto 1rem',
									placeItems: 'center',
									borderRadius: '50%',
									background: 'var(--clr-primary-10)',
									color: 'var(--clr-primary-1)'
								}}>
								<IconBrilliant />
							</Flex>
							<Title
								size="1.5rem"
								sx={{
									color: 'var(--clr-primary-1)'
								}}>
								Vision
							</Title>
							<Text
								size="1rem"
								sx={{
									color: 'var(--clr-primary-2)'
								}}>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit
								autem unde numquam nisi.
							</Text>
						</Flex>
					</Flex>
					<Flex
						sx={{
							padding: '1rem 2rem',
							borderRadius: 'var(--radius)'
						}}
						justify="center"
						align="center"
						h="364px"
						w="364px"
						bg="#c5a491">
						<Flex direction="column" w="100%" h="100%" justify="center" align="center" gap={5}>
							<Flex
								sx={{
									width: '4rem',
									height: '4rem',
									display: 'grid',
									margin: '0px auto 1rem',
									placeItems: 'center',
									borderRadius: '50%',
									background: 'var(--clr-primary-10)',
									color: 'var(--clr-primary-1)'
								}}>
								<IconHistory />
							</Flex>
							<Title
								size="1.5rem"
								sx={{
									color: 'var(--clr-primary-1)'
								}}>
								History
							</Title>
							<Text
								size="1rem"
								sx={{
									color: 'var(--clr-primary-2)'
								}}>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit
								autem unde numquam nisi.
							</Text>
						</Flex>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Section2;
