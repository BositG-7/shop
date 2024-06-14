import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mantine/core';

interface ProductsProps {}

const Products: FunctionComponent<ProductsProps> = () => {
	const navigate = useNavigate();

	return <Box>Products</Box>;
};

export default Products;
