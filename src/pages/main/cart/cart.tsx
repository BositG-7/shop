import { FunctionComponent, useState } from 'react';
import { Flex } from '@mantine/core';

interface CartProps {}

const Cart: FunctionComponent<CartProps> = () => {
	const [count, setCount] = useState(0);

	return (
		<Flex justify="center" align="center" h="100vh" w="100%" bg="red">
			Cart
		</Flex>
	);
};

export default Cart;
