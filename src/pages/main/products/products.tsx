import { FunctionComponent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Flex, Grid, InputBase, Loader, Select, Slider, Text, Title } from '@mantine/core';
import { Api } from 'modules/products';
import { IProduct } from 'modules/products/types';

import { Card } from './components';
import { IconApp, IconMenu } from './images';

interface ProductsProps {}

const Products: FunctionComponent<ProductsProps> = () => {
	const [categorys, setCategorys] = useState<IProduct.Category.TResponse>([]);
	const [products, setProducts] = useState<IProduct.Products.Response>({
		products: []
	});
	const navigate = useNavigate();

	const [value, setValue] = useState(100);
	const [endValue, setEndValue] = useState(100);
	const [isSlider, setSlider] = useState(false);
	const [activePosition, setActivePosition] = useState(0);

	useEffect(() => {
		const fetchCategory = async () => {
			try {
				const { data } = await Api.CategortList({});

				setCategorys(data);
			} catch (error: any) {
				console.log(error);
			}
		};

		const fetchProducts = async () => {
			try {
				const { data } = await Api.ProductGet({});

				setProducts(data);
			} catch (error: any) {
				console.log(error);
			}
		};

		fetchCategory();

		fetchProducts();
	}, []);

	if (!categorys[0])
		return (
			<>
				<Flex h="100vh" w="100%" justify="center" align="center" direction="column">
					<Loader color="blue" size="lg" type="" />
				</Flex>
			</>
		);

	return (
		<>
			<Flex h="auto" w="100%" justify="center" align="center" direction="column">
				<Flex p="24px 100px" h={158} bg="#eaded7" align="center" w="100%">
					<Text size="2rem">
						<span style={{ color: '#795744' }}>Home / </span>Products
					</Text>
				</Flex>
				<Flex p="24px 100px" gap={80} w="100%">
					<Flex direction="column" gap={15} align="center" w="250px">
						<Flex w="100%">
							<InputBase
								w="100%"
								sx={{
									borderRadius: 'var(--radius)',
									borderColor: 'transparent',
									letterSpacing: 'var(--spacing)'
								}}
								placeholder="    Search"
							/>
						</Flex>
						<Flex gap={10} direction="column" w="100%">
							<Title sx={{ cursor: 'pointer' }} color="#102a42" size="1rem">
								Category
							</Title>
							<Flex w="100%" gap={5} direction="column">
								{['All', ...categorys].map(item => (
									<Text
										size={14}
										color="#617d98"
										sx={{
											cursor: 'pointer',
											opacity: 1
										}}
										key={item}>
										{item}
									</Text>
								))}
							</Flex>
						</Flex>

						<Flex gap={10} direction="column" w="100%">
							<Title sx={{ cursor: 'pointer' }} color="#102a42" size="1rem">
								Price
							</Title>
							<Text size="sm">{isSlider ? value : '-$∞'}</Text>

							<Slider
								w="100%"
								value={value}
								min={0}
								max={100}
								step={0.01}
								onChange={e => {
									setValue(e);
									setSlider(true);
								}}
								onChangeEnd={e => setEndValue(e)}
							/>
						</Flex>
						<Flex gap={10} direction="column" w="100%">
							<Button
								onClick={() => {
									setValue(100);
									setEndValue(100);
									setSlider(false);
								}}
								sx={{
									background: 'var(--clr-red-dark)',
									color: 'var(--clr-white)',
									borderRadius: 'var(--radius)'
								}}
								w="80%">
								Clear Filters
							</Button>
						</Flex>
					</Flex>
					<Flex direction="column" w="100%" align="center">
						<Flex justify="space-between" align="center" w="100%">
							<Flex align="center" gap={10}>
								<Flex
									onClick={() => {
										setActivePosition(0);
									}}
									bg={activePosition === 0 ? 'blue' : 'none'}
									sx={{ border: '1px solid black', padding: '4px', borderRadius: '0.25rem', cursor: 'pointer' }}>
									<IconApp />
								</Flex>
								<Flex
									onClick={() => {
										setActivePosition(1);
									}}
									bg={activePosition === 1 ? 'blue' : 'none'}
									sx={{ border: '1px solid black', padding: '4px', borderRadius: '0.25rem', cursor: 'pointer' }}>
									<IconMenu />
								</Flex>
							</Flex>
							<Flex>
								<Text color="#324d67" size="1rem">
									{' '}
									{products.products.length} Products Found
								</Text>
							</Flex>
							<Flex
								sx={{
									width: '468px',
									height: '1px',
									background: '#bcccdc'
								}}
							/>
							<Flex align="center" justify="center" gap={5}>
								<Text size="1rem">Sort By</Text>

								<Select
									sx={{
										borderColor: 'transparent',
										fontSize: '1rem',
										textTransform: 'capitalize',
										padding: '0.25rem 0.5rem',
										border: 'none'
									}}
									data={['Price (Lowest)', 'Price (Highest)', 'Name (A-Z)', 'Name (Z-A)']}
									defaultValue="Price (Lowest)"
								/>
							</Flex>
						</Flex>
						<Grid sx={{ placeItems: 'center' }} w="100%" gutter="xs">
							{products.products.map(item => (
								<Card key={item.id} title={item.title} img={item.thumbnail} price={item.price} id={item.id} />
							))}
						</Grid>
					</Flex>
				</Flex>
			</Flex>
		</>
	);
};

export default Products;
